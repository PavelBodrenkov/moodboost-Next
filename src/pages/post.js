// import './Post.scss';
// import { useParams } from 'react-router-dom';
// import { useEffect, useState, useContext, postef} from 'react';
// import {fetchOnepost, fetchDeleteLike, fetchAddLikes, fetchShare} from '../../http/postAPI';
// import { observer } from 'mobx-react-lite';
// import { Context } from "../../index";
// import { fetchAllComment } from "../../http/commentApi";
import share from '../../public/image/share.svg';
import like from '../../public/image/like.svg';
import point from '../../public/image/point.svg';
import watch_min from '../../public/image/watch-min.svg';
import comment_min from '../../public/image/comment-min.svg';
import like_min from '../../public/image/like-min.svg';
import share_min from '../../public/image/share-min.svg';
// import moment from 'moment';
// import SignUpWeekly from '../../components/SignUpWeekly/SignUpWeekly';
// import Comments from '../../components/Comments/Comments'
import commentImg from '../../public/image/comment.svg';
// // import SeoHead from '../../components/SEO/SeoHead';
// // import { Helmet } from 'react-helmet';
// import PopupShare from '../../components/PopupShare/PopupShare';
import moment from 'moment';
import Image from 'next/image'
import parse from 'html-dom-parser';
import stylePost from '../../styles/post.module.scss'



const Postr = ({post}) => {


    // const [post, setpost] = useState([])
    // const {id} = useParams()
    // const {post} = useContext(Context)
    // const {post} = useContext(Context)
    // const {admin} = useContext(Context)
    // const {comment} = useContext(Context)
     let cardViews = (post.views / 1000).toFixed(1)
    // const [cardShare, setCardShare] = useState({ url:"", img:"", id:"", clicks:"" })

    // useEffect(() => {
    //     const token = localStorage.getItem("adminToken")
    //     fetchOnepost(id, token).then(data => setpost(data.data))
    // }, [id])

    // useEffect(() => {
    //      const token = localStorage.getItem("adminToken")
    //      fetchAllComment(id, token).then(data => comment.setAllComments(data.data))
    // }, [])

    // const isLiked = post.likes?.some((like) => like === admin.admin._id)
    // const cardLikeButtonClassName = `main-article__button__list ${isLiked && 'like'}`

    // function hendleLikeClick () {
    //     if(post.isAuth) {
    //         const posttoken = localStorage.getItem("postToken")
    //         const isLiked = post.likes.some((like) => like === admin.admin._id)
    //         const likeRequest = isLiked ? fetchDeleteLike(post._id, posttoken) : fetchAddLikes(post._id, posttoken)
    //         likeRequest.then((newPost) => {
    //             setpost({...post, likes:newPost.data.likes})
    //         })
    //     } else {
    //         post.setOpenAuth(true)
    //     }
    // }
    // const com = useRef(null)

    // function scrollToMyRef () {
    //   com.current.scrollIntoView()
    // }

    // const [scroll, setScroll] = useState(0);

    // const handleScroll = () => {
    //     setScroll(window.scrollY);
    //   };

    // useEffect(() => {
    // window.addEventListener("scroll", handleScroll);
    // return () => window.removeEventListener("scroll", handleScroll);
    // }, []);

    // function shareClick (id) {
    //     fetchShare(id)
    //     .then(data => {
    //         setpost({...post, shareCount:data.data.shareCount})
    //     })
    // }

    // function OpenSharePopup () {
    //     post.setOpenShare(true)
    //     setCardShare({url:post._id, img:post.image, id:post._id, clicks:shareClick})
    // }


    return(
        <article className={stylePost.main_article, stylePost.main_article__post}>
            <div className={stylePost.post_color}>
                <div className={stylePost.article_preview__hash}>
                    <p className='t1'>{post?.category?.name}</p>
                    <p>{moment(post.created_at).format("DD MMM, YYYY")}</p>
                </div>
                <h1 className={stylePost.main_article__title}>{post.title}</h1>
                <div className={stylePost.main_article__button, stylePost.main_article__button_post}>
                    <nav>
                        <ul className={stylePost.main_article__button_active}>
                            <li onClick={() => hendleLikeClick()} >
                            <Image className={stylePost.like_img} src={like} />
                                    <span>Like</span>
                                </li>
                            <li onClick={() => scrollToMyRef()} className={`${stylePost.main_article__button__list} comment`}>
                                    <Image className={stylePost.comment_img} src={commentImg} />
                                    <span>Comment</span>
                            </li>
                            <li onClick={() => OpenSharePopup()} className={`${stylePost.main_article__button__list} shere`}>
                                    <Image className={stylePost.share_img} src={share} />
                                    <span>Share</span>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className={stylePost.main_article__button_sum}>
                            <li className={stylePost.article_button__list_two, stylePost.main_article__button_list_two}>
                                    <Image className={stylePost.article_button__min_img} src={watch_min} />
                                    <span>{cardViews + 'K'}</span>
                            </li>
                            <li className={stylePost.article_button__list_two, stylePost.main_article__button_list_two}><img  src={point}/></li>
                            <li className={stylePost.article_button__list_two, stylePost.main_article__button_list_two}>
                                    <Image className={stylePost.article_button__min_img} src={like_min} />
                                    <span>{post.likes?.length || 0}</span>
                                </li>
                            <li className={stylePost.article_button__list_two, stylePost.main_article__button_list_two}><img src={point}/></li>
                            <li className={stylePost.article_button__list_two, stylePost.main_article__button_list_two}>
                                <Image className={stylePost.article_button__min_img} src={comment_min} />
                                <span>{post.commentCount || 0}</span>
                                </li>
                            <li className={stylePost.article_button__list_two, stylePost.main_article__button_list_two}><img src={point}/></li>
                            <li className={stylePost.article_button__list_two, stylePost.main_article__button_list_two}>
                                <Image className={stylePost.article_button__min_img} src={share_min} />
                                <span>{post.shareCount || 0}</span>
                                </li>
                        </ul>
                    </nav>
                </div>
                <p className={stylePost.post_excerpt}>{post.excerpt}</p>
                {/* <p className="post-body" dangerouslySetInnerHTML={{ __html: post.body }}/> */}
                <div dangerouslySetInnerHTML={{ __html: post.body }} />
                
                <div className={stylePost.main_article__button, stylePost.main_article__button-post, stylePost.non_sticky}>
                    <nav>
                        <ul className={stylePost.main_article__button_active}>
                            <li onClick={() => hendleLikeClick()}>
                            <Image className={stylePost.like_img} src={like} />
                                    <span>Like</span>
                                </li>
                            <li onClick={() => scrollToMyRef()} className="main-article__button__list comment">
                                <Image className={stylePost.comment_img} src={commentImg} />
                                    <span>Comment</span>
                            </li>
                            <li onClick={() => OpenSharePopup()} className="main-article__button__list shere">
                                    <Image className="share-img" src={share} />
                                    <span>Share</span>
                            </li>
                        </ul>
                    </nav>
                    <nav>
                        <ul className="main-article__button-sum">
                            <li className="article-button__list-two main-article__button_list-two">
                                    <Image className='article-button__min-img' src={watch_min} />
                                    <span>{cardViews + 'K'}</span>
                            </li>
                            <li className="article-button__list-two main-article__button_list-two"><img  src={point}/></li>
                            <li className="article-button__list-two main-article__button_list-two">
                                    <Image className='article-button__min-img' src={like_min} />
                                    <span>{post.likes?.length || 0}</span>
                                </li>
                            <li className="article-button__list-two main-article__button_list-two"><img src={point}/></li>
                            <li className="article-button__list-two main-article__button_list-two">
                            <Image className='article-button__min-img' src={comment_min} />
                                <span>{post.commentCount || 0}</span>
                                </li>
                            <li className="article-button__list-two main-article__button_list-two"><img src={point}/></li>
                            <li className="article-button__list-two main-article__button_list-two">
                                <Image className='article-button__min-img' src={share_min} />
                                <span>{post.shareCount || 0}</span>
                                </li>
                        </ul>
                    </nav>
                </div> 
            </div>
        {/* <div ref={com} className="sign-up-weekly__container">
            <SignUpWeekly /> 
        </div> */}
        {/* <Comments  post={post}/> */}
        {/* {cardShare.url && cardShare.img && <PopupShare log={'https://moodboost.me/main/post/' + cardShare.url} img={'https://api.moodboost.me/'+cardShare.img} id={cardShare.id} shareClick={cardShare.clicks}/>} */}
 
    </article>

    )
}

export default Postr

