import React, { useContext, useEffect} from "react"
import { observer } from 'mobx-react-lite';

import share from '../../public/image/share.svg';
import commentImg from '../../public/image/comment.svg';
import like from '../../public/image/like.svg';
import point from '../../public/image/point.svg';
import watch_min from '../../public/image/watch-min.svg';
import comment_min from '../../public/image/comment-min.svg';
import like_min from '../../public/image/like-min.svg';
import share_min from '../../public/image/share-min.svg';
import CommentService from '../../http/commentApi';
import { POST_ROUTE } from '../../utils/consts';
import styles from '../../styles/Card.module.scss';
import userStore from '../../store/userStore';
import commentStore from '../../store/commentStore';
import postStore from '../../store/postStore';
import Image from 'next/image';


const ActionBox = observer(({card, hendleLikeClick, shareCard, bool }) => {
    let cardViews = (card.views / 1000).toFixed(1)
    
    const isLiked = card.likes?.some((like) => like == userStore.user.id)
    const cardLikeButtonClassName = `${styles.article_button__list} ${isLiked && 'like'}`

    useEffect(() => {
        setTimeout(() => {
         CommentService.AllComment(card._id).then(data => commentStore.setAllComments(data.data))
        }, 20)
    }, [])

    function OpenSharePopup () {
        postStore.setOpenShare(true)
        shareCard(card)
    }

    return (
        <div className={bool ? styles.article_button_container : styles.article_button_container_post}>
                    <ul className={styles.article_button}>
                        <li onClick={() => hendleLikeClick(card, 1)} className={cardLikeButtonClassName}>
                            <Image className="like-img" src={like} />
                            <span>Like</span>
                        </li>
                        <li className={`${styles.article_button__list} comment`}>
                            <a href={POST_ROUTE + '/' + card._id+'#comments'}>
                                <Image className="comment-img" src={commentImg} />
                                <span>Comment</span>
                            </a> 
                        </li>
                        <li onClick={() => OpenSharePopup()} className={`${styles.article_button__list} share`}>
                            <Image className="share-img" src={share} />
                            <span>Share</span>
                        </li>
                    </ul>
                    <ul className={`${styles.article_button} ${styles.article_button__min}`}>
                        <li className={styles.article_button__list_two}>
                                <Image className={styles.article_button__min_img} src={watch_min} />
                                <span>{cardViews+ 'K'}</span>
                        </li>
                        <li className={styles.article_button__list_two}><Image  src={point}/></li>
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
    )
})

export default ActionBox
