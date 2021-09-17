import moment from 'moment';
import commentLike from '../../public/image/comment-like.svg';
import commentDisLike from '../../public/image/comment-dislike.svg';
import React, {useState, useEffect} from 'react';
import AnswerComments from './Comment'
import styleComment from '../../styles/Comment.module.scss';
import { observer } from 'mobx-react-lite';
import CommentService from '../../http/commentApi';
import {CSSTransition} from 'react-transition-group'
import Image from 'next/image';
import userStore from '../../store/userStore';
import commentStore from '../../store/commentStore';
import activeLike from '../../public/image/ei_like.svg';

const Comment = observer(({comment1, device, loader}) => {
    const [openComment, setOpenComment] = useState(false)
    const [answerText, setAnswerText] = useState('')
    const[render, setRender] = useState(false)

    useEffect(() => {
        setTimeout(() => {
        
         CommentService.AllComment(device._id).then(data => commentStore.setAllComments(data.data))
        }, 20)
    }, [render])

    const isLiked = comment1.likes?.some((like) => like === userStore.user.id)
    const cardLikeButtonClassName = isLiked && `${styleComment.comment_like_button}`

    const isDislaked = comment1.likes?.some((like) => like === userStore.user.id)
    const disabledDislike = !isDislaked && `${styleComment.comment_dislike_button}`
 
    //Отправить отывет на комментарий
    function hendleSubmitComment (e) {
        e.preventDefault()
        CommentService.commentAnswer(answerText, comment1._id, device._id).then(data => commentStore.setComment(data.data))
        setRender(!render)
        setOpenComment(false)
        setAnswerText('')
       }

       //Поставить лайк комментарию
    function likeComment (comment2) {
        const isLiked = comment2.likes.some((like) => like == userStore.user.id)
        if(userStore.isAuth) {
            const likeRequest = !isLiked && CommentService.likeComment(comment2._id)
            likeRequest.then((newPost) => {
                const newPosts = commentStore.allComments.map(item => 
                    item._id === comment2._id ? {...item, likes:newPost.data.likes} : item
                )
                commentStore.setAllComments(newPosts) 
                setRender(!render)
            })
        } else {
            userStore.setOpenAuth(true)
        }
    }

    function dislikeComment (comment2) {
        const isLiked = comment2.likes.some((like) => like == userStore.user.id)
        if(userStore.isAuth) {
            const likeRequest = isLiked && CommentService.dislikeComment(comment2._id)
            likeRequest.then((newPost) => {
                const newPosts = commentStore.allComments.map(item => 
                    item._id === comment2._id ? {...item, likes:newPost.data.likes} : item
                )
                commentStore.setAllComments(newPosts) 
                setRender(!render)
            })
        } else {
            userStore.setOpenAuth(true)
        }
    }

    function openAnswer () {
        if(userStore.isAuth) {
            setOpenComment(true)
        } else {
            userStore.setOpenAuth(true)
        }
    }


    function nameComment () {
        if(comment1.owner) {
            return comment1.owner.name
        } else if (comment1.ownerFacebook) {
            return comment1.ownerFacebook?.name
        }
    }

    return(
        <div className={styleComment.comments__list} key={comment1._id}>
        <div>
            <p className={styleComment.comments__list_title}>{nameComment()}</p>
            <p className={styleComment.comments__list_date}>{moment(comment1.createdAt).format("DD MMM, YYYY, HH:mm")}</p>
        </div>
        <div>
            <p className={styleComment.comments__list_body}>{comment1.body}</p>
            {comment1?.image && <img className={styleComment.comments__list_image} src={process.env.API_HOST + `${comment1?.image}`} />}
            <div className={styleComment.comments__list_answer}>
                <button onClick={() => openAnswer()} className={styleComment.comments__list_answer_title}>ANSWER</button>
                <div className={styleComment.comments__list_like}>
                    <p className={disabledDislike}><Image onClick={() => dislikeComment(comment1)} src={commentDisLike} /></p>
                    <p className={styleComment.comments__list_like_title}>{comment1.likes.length}</p>
                    <p><Image onClick={() => likeComment(comment1)} src={isLiked ? activeLike : commentLike} /></p>
                </div>
            </div>
            {comment1.children && comment1.children.length?
            
            comment1.children.map((item) => {
                return(
                    <ul style={{listStyle: "none"}} key={item._id}>
                        <li><AnswerComments comment1={item} device={device} /> </li>
                        
                    </ul>
                )
            })
            : null
            }
            
            <CSSTransition in={openComment} classNames='commentAlert' timeout={10} unmountOnExit>
            <div>
                <input onChange={(e) => setAnswerText(e.target.value)} type="text" value={answerText} placeholder="Add a response..."/>
                <div>
                    <button className={styleComment.cancel_btn} onClick={() => setOpenComment(false)}>Cancel</button>
                    <button className={styleComment.send_btn} onClick={(e) => hendleSubmitComment(e)}>Answer</button>
                </div>
            </div>
            </CSSTransition>
        </div>
    </div>
    )
})

export default Comment