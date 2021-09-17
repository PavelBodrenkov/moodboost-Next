import buttonMessage from '../../public/image/button-message.svg'
import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import Comment from './../Comment/Comment';
import CommentService from '../../http/commentApi';
import userStore from '../../store/userStore';
import commentStore from '../../store/commentStore';
import styleComments from '../../styles/Comments.module.scss';
import Image from 'next/image';


const Comments = observer(({post}) => {
    const [textVal, setTextVal] = useState('')
    const[loader, setLoader] = useState(false)

    function hendleText (e) {
        setTextVal(e.target.value)
    }

   function hendleSubmitComment (e) {
    e.preventDefault()
    if(userStore.isAuth) {
        setLoader(true)
        const formData = new FormData()
        formData.append('body', textVal)
        formData.append('image', commentStore.commentFile ? commentStore.commentFile : 'null')
        formData.append('post', post._id)
        CommentService.comment(formData).then(data => commentStore.setComment(data.data))
        commentStore.setCommentFile('')
    } else {
        userStore.setOpenAuth(true)
    }
    setTextVal('')
   }

    function selectFile (e) {
    commentStore.setCommentFile(e.target.files[0]) 
    }

   useEffect(() => {
       setTimeout(() => {
        setLoader(true)
        CommentService.AllComment(post._id).then(data => commentStore.setAllComments(data.data))
        // setLoader(false)
       }, 1000)
   }, [])

    return(
        <section id="comments" className={styleComments.comments}>
            <div className={styleComments.comments__content_title}>
                <h4  className={styleComments.comments__title}>Comments</h4>
                <ul className={styleComments.comments__title_lists}>
                    <li><a>Hot</a></li>
                    <li><a>Fresh</a></li>
                </ul>
            </div>
            {commentStore.allComments.map((comment) => {
                return (
                    <Comment device={post} comment1={comment} loader={loader} key={comment._id}/>
                )
            })}
            <div >
            
                <div>
                    <form onSubmit={(e) => hendleSubmitComment(e)} className={styleComments.comments__content_message}>
                        <textarea  onChange={(e) => hendleText(e)} className={styleComments.comments__textarea} placeholder="Write a comment..." value={textVal}></textarea>
                        <div className={styleComments.comments__content_button}>
                            <div>
                                <div className={styleComments.comments__download_file}>
                                    <label>
                                        <input onChange={selectFile} className={styleComments.comments__input} type="file" name="file"/>
                                    </label>
                                </div>
                                <button type="submit" className={styleComments.comments__button}><Image src={buttonMessage} /></button>
                                
                            </div>
                            {commentStore.commentFile && <div className={styleComments.comments__content_button_prev}>
                                <p>{commentStore.commentFile.name}</p>
                            </div>}
                            
                        </div>
                    </form>
                </div>
            </div>
        </section>
    )
})

export default Comments