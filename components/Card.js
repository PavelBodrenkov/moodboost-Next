
// import { useLocation, useHistory } from 'react-router-dom';
import styles from './../styles/Card.module.scss';
import { POST_ROUTE } from './../utils/consts';
 import share from '../public/image/share.svg';
import commentImg from '../public/image/comment.svg';
 import like from '../public/image/like.svg';
import point from '../public/image/point.svg';
 import watch_min from '../public/image/watch-min.svg';
 import comment_min from '../public/image/comment-min.svg';
import like_min from '../public/image/like-min.svg';
 import share_min from '../public/image/share-min.svg';
 import Link from 'next/link'
 import userStore from '../store/userStore';
 import postStore from '../store/postStore';
import PostService from '../http/postAPI';
import React, { useContext, useEffect, useState} from "react"
import moment from 'moment';
// import {fetchAllComment} from '../../http/commentApi';
// import { observer, useStaticRendering } from 'mobx-react-lite';
// import {FacebookShareCount} from 'react-share'
import Image from 'next/image'
import { observer } from 'mobx-react-lite';
import PopupShare from '../components/PopupShare/PopupShare';
import Head from 'next/head';
import ActionBox from '../components/ActionBox/ActionBox';


const Card = observer(({card, shareCard}) => {
    let cardViews = (card.views / 1000).toFixed(1)
 
    const isLiked = card.likes?.some((like) => like === userStore.user.id)
    const cardLikeButtonClassName = `${styles.article_button__list} ${isLiked && 'like'}`

    // useEffect(() => {
    //     setTimeout(() => {
    //      const token = localStorage.getItem("adminToken")
    //      fetchAllComment(card._id, token).then(data => comment.setAllComments(data.data))
    //     }, 20)
    // }, [])

    function OpenSharePopup () {
        postStore.setOpenShare(true)
        shareCard(card)
    }


    function hendleLikeClick (card) {
        if(userStore.isAuth) {
            const isLiked = card.likes?.some((like) => like === userStore?.user?.id)
            postStore.setIsLiked(isLiked)
            const likeRequest = isLiked ? PostService.deleteLikePost(card._id) : PostService.likePost(card._id)
            likeRequest.then((newPost) => {
                const newPosts = postStore.posts?.map(item => 
                    item._id === card._id ? {...item, likes:newPost.data.likes} : item
                )
                postStore.setPosts(newPosts)
            })
        } else {
            userStore.setOpenAuth(true)
        }
    }

    return(
        <>
        <Head>
            <meta property="og:title" content={card.title} />
            <meta property="og:description" content={card.excerpt} />
            <meta property="og:image" content={process.env.API_HOST+ card.image} />
            <meta property="og:url" content={process.env.PUBLIC_HOST + `post/${card._id}`} />
            <meta property="og:type" content='article' />
            <meta property="fb:app_id" content={process.env.FACEBOOK_ID}/>
        </Head>
        
        <article id="carde" className={styles.article_preview}>
     
                <div className={styles.article_preview__hash}>
                    <p className={styles.t1}>{card.category.name}</p>
                    <p className={styles.article_preview__hash_data}>{moment(card.created_at).format("DD MMM, YYYY")}</p>
                </div>  
                {/* <Link href={router.asPath.slice(0, 5) != '/' ? `${card._id}` : 'post/' + card._id}> */}
                {/* <Link href="/post/[id]" as={`/post/${card._id}`}> */}
                    <a href={`/post/${card._id}`} as={`/post/${card._id}`} className={styles.article_preview__link} >
                        <h3 className={styles.article_preview__title}>{card.title}</h3> 
                        <img src={'https://api.moodboost.me/' + card.image.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + card.image.split('.').pop()} alt={card.title} className={styles.article_preview__photo}/>
                        <div className={styles.article_actions}>
                            <p>{card.excerpt}</p>
                        </div>
                    </a>
                {/* </Link> */}
                <ActionBox card={card}  hendleLikeClick={hendleLikeClick} shareCard={shareCard} bool={true}/>
        </article>
        <PopupShare />
       </>
    )
})

export default Card