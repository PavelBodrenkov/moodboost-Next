import MainContainer from '../../components/MainContainer';
import Poster from '../../components/post';
import MainPosts from '../../components/MainPosts';
import { observer } from 'mobx-react-lite';
import postStore from '../../store/postStore';
import React, {useEffect, useState} from 'react';
import PopupShare from '../../components/PopupShare/PopupShare';
import PostService from '../../http/postAPI';

 const Post = observer(({post, posts, categories, moddlePost, count}) => {
    const [cardShare, setCardShare] = useState({ url:"", img:"", id:"", clicks:"" })
useEffect(() => {
    postStore.setPosts(posts)
    postStore.setMiddlePost(moddlePost)
    postStore.setPostCount(count)
}, [])

function shareClick (id) {
    PostService.fetchShare(id)
}

function OpenSharePopup () {
    postStore.setOpenShare(true)
    setCardShare({url:post._id, img:post.image, id:post._id, clicks:shareClick})
}
    
    
    return (
        <>
        <MainContainer cards={postStore.posts} categories={categories}>
            <Poster post={post} OpenSharePopup={OpenSharePopup}/>
            <MainPosts />
        </MainContainer>
        {cardShare.url && cardShare.img && <PopupShare log={process.env.PUBLIC_HOST + 'post/' + cardShare.url} img={process.env.API_HOST + cardShare.img} id={cardShare.id} shareClick={cardShare.clicks}/>}
        </>
    )
})

export default Post

export async function getServerSideProps({params}) {
    const response = await fetch(process.env.API_HOST + `posts/post/${params.id}`)
    const response2 = await fetch(process.env.API_HOST + `posts`)
    const response3 = await fetch(process.env.API_HOST + `categories`)
    const post = await response.json()
    const posts = await response2.json()
    const categories = await response3.json()
    return {
        props: {post, posts:posts[0], categories, moddlePost: posts[2], count: posts[1]},
    }
}

