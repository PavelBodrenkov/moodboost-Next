import Card from './Card';
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router"
import { observer } from 'mobx-react-lite';
import postStore from '../store/postStore';
import PostService from '../http/postAPI';
import PopupShare from './PopupShare/PopupShare';


const MainPosts = observer(() => {
    const[skip, setSkip] = useState(1)
    const router = useRouter()
    const [fetching, setFetching] = useState(false)
    const [cardShare, setCardShare] = useState({ url:"", img:"", id:"", clicks:"" })
    const [stopScroll, setStopScroll] = useState(true)
 
    const getMorePosts = async() => {
        const response = await fetch(`https://api.moodboost.me/posts?limit=12&skip=${skip}`)
        const newPost = await response.json()
        postStore.setPosts([...postStore.posts, ...newPost[0]])
        setSkip(prevState => prevState + 1)
        setFetching(false)
    }

   //Пагинация карточек при скролле
   useEffect(() => {
        if(fetching) {
            getMorePosts()
        }
    }, [fetching])


//Слушатель скролла для пагинации карточек
    useEffect(() => {
        document.addEventListener('scroll', scrollHendler)
        
        return function () {
            document.addEventListener('scroll', scrollHendler)
        }
    }, [fetching])

//Функция скролла для пагинации карточек
    const scrollHendler = (e) => {
        if(e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 2800 && postStore.posts.length < postStore.postCount && postStore.stopScroll) {
            setFetching(true)
        }
    }

    function shareClick (id) {
        PostService.fetchShare(id)
        .then(data => {
            const newShareCount = postStore.posts.map((item) => 
                item?._id === data?.data?._id ? {...item, shareCount:data.data.shareCount} : item
            )
            postStore.setPosts(newShareCount)     
        })
    }

    function shareCard (card) {
        setCardShare({url:card._id, img:card.image, id:card._id, clicks:shareClick})
    }

    return (
        <>
        <div>
            
            {postStore.posts?.map(post => {
                return(
                    <Card card={post} shareCard={shareCard} key={post._id}/>
                )
            })}
        </div>
        {cardShare.url && cardShare.img && 
            <PopupShare log={'https://moodboost.me/post/' + cardShare.url}  
            img={'https://api.moodboost.me/' + cardShare.img.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + cardShare.img.split('.').pop()} 
            id={cardShare.id} shareClick={cardShare.clicks}/>}
        </>
    )
})

export default MainPosts

