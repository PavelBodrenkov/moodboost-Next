
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
 import Link from 'next/Link'
 import {useRouter} from 'next/router'
// import { Context } from "../../index";
// import React, { useContext, useEffect, useState} from "react"
import moment from 'moment';
// import {fetchAllComment} from '../../http/commentApi';
// import { observer, useStaticRendering } from 'mobx-react-lite';
// import {FacebookShareCount} from 'react-share'
// import { Helmet } from 'react-helmet';
// import SeoHead from '../SEO/SeoHead';
import Image from 'next/image'

const Card = ({card, hendleLikeClick, shareCard}) => {
    let cardViews = (card.views / 1000).toFixed(1)
    // const {comment} = useContext(Context)
    // const {post} = useContext(Context)
    // const {admin} = useContext(Context)
    // const {user} = useContext(Context)
  
    // const isLiked = card.likes?.some((like) => like === admin.admin?._id ? admin.admin?._id : user.user._id)
    // const cardLikeButtonClassName = `article-button__list ${isLiked && 'like'}`

    // useEffect(() => {
    //     setTimeout(() => {
    //      const token = localStorage.getItem("adminToken")
    //      fetchAllComment(card._id, token).then(data => comment.setAllComments(data.data))
    //     }, 20)
    // }, [])

    // function OpenSharePopup () {
    //     post.setOpenShare(true)
    //     shareCard(card)
    // }
    
    
      const router = useRouter();
      console.log(router.asPath.slice(0, 5))
    return(
        <>
        <article className={styles.article_preview}>
            {/* <SeoHead /> */}
                <div className={styles.article_preview__hash}>
                    <p className={styles.t1}>{card.category.name}</p>
                    <p className={styles.article_preview__hash_data}>{moment(card.created_at).format("DD MMM, YYYY")}</p>
                </div>  
                <Link href={router.asPath.slice(0, 5) != '/' ? `${card._id}` : 'post/' + card._id}>
                    <a className={styles.article_preview__link} >
                        <h3 className={styles.article_preview__title}>{card.title}</h3> 
                        <img src={'https://api.moodboost.me/' + card.image.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + card.image.split('.').pop()} alt={card.title} className={styles.article_preview__photo}/>
                        <div className={styles.article_actions}>
                            <p>{card.excerpt}</p>
                        </div>
                    </a>
                </Link>
                
                <div className={styles.article_button_container}>
                    <ul className={styles.article_button}>
                        <li className={styles.article_button__list}>
                            <Image className={styles.like_img} src={like} />
                            <span>Like</span>
                        </li>
                        <li className={`${styles.article_button__list} comment`}>
                            <Link href={`/${card._id}`}>
                                <a>
                                    <Image className={styles.comment_img} src={commentImg} />
                                    <span>Comment</span>
                                </a> 
                            </Link>
                        </li>
                        <li onClick={() => OpenSharePopup()} className={`${styles.article_button__list} shere`}>
                            <Image className={styles.share_img} src={share} />
                            <span>Share</span>
                        </li>
                    </ul>
                    <ul className={`article_button__min ${styles.article_button}`}>
                        <li className={styles.article_button__list_two}>
                                <Image className={styles.article_button__min_img} src={watch_min} />
                                <span>{cardViews+ 'K'}</span>
                        </li>
                        <li className={styles.article_button__list_two}><Image src={point}/></li>
                        <li className={styles.article_button__list_two}>
                                <Image className={styles.article_button__min_img} src={like_min} />
                                <span>{card?.likes?.length || 0}</span>
                            </li>
                        <li className={styles.article_button__list_two}><Image src={point}/></li>
                        <li className={styles.article_button__list_two}>
                            <Image className={styles.article_button__min_img} src={comment_min} />
                            <span>{card.commentCount || 0}</span>
                            </li>
                        <li className={styles.article_button__list_two}><Image src={point}/></li>
                        <li className={styles.article_button__list_two}>
                            <Image className={styles.article_button__min_img} src={share_min} />
                            <span>{card.shareCount || 0}</span>
                        </li>
                    </ul>
                </div>
        </article>
       </>
    )
}

export default Card