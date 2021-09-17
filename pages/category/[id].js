import { observer } from "mobx-react-lite";
import { useState, useEffect } from "react";
import MainContainer from "../../components/MainContainer"
import MainPosts from "../../components/MainPosts";
import postStore from "../../store/postStore";


 const categorysort = observer(({post, posts, categories}) => {
    if(posts) {
        postStore.setStopScroll(false)
    }

    useEffect(() => {
        postStore.setPosts(post)
    }, [post])
  
    return (
        <MainContainer cards={posts[0]} categories={categories}>
            <MainPosts users={post}/>
        </MainContainer>
    )
})

export default categorysort


export async function getServerSideProps({params}) {

    const response = await fetch(process.env.API_HOST + `posts/${params.id}`)
    const response2 = await fetch(process.env.API_HOST + `posts`)
    const response3 = await fetch(process.env.API_HOST + `categories`)
    const post = await response.json()
    const posts = await response2.json()
    const categories = await response3.json()
    return {
        props: {post, posts, categories},
    }
}