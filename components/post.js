import { useEffect, useState, useRef} from 'react';
import moment from 'moment';
import stylePost from '../styles/post.module.scss';
import SignUpWeekly from './SignUpWeekly/SignUpWeekly';
import Head from 'next/head'
import Comments from '../components/Comments/Comments';
import ActionBoxPost from '../components/ActionBoxPost/ActionBoxPost';
import PostService from '../http/postAPI';
import userStore from '../store/userStore';

function Postr ({post, OpenSharePopup}) {
    const [device, setDevice] = useState(post)
    const [scroll, setScroll] = useState(0);

    function hendleLikeClick () {
        if(userStore.isAuth) {
            const isLiked = device.likes.some((like) => like === userStore.user.id)
            const likeRequest = isLiked ? PostService.deleteLikePost(post._id) : PostService.likePost(post._id)
            likeRequest.then((newPost) => {
                setDevice({...device, likes:newPost.data.likes})
            })
        } else {
            userStore.setOpenAuth(true)
        }
    }

    const com = useRef(null)

    function scrollToMyRef () {
      com.current.scrollIntoView()
    }

    const handleScroll = () => {
        setScroll(window.scrollY);
      };

    useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return(
        <>
        <Head>
            <title>{device.title}</title>
            <meta property="og:title" content={device.title} />
            <meta property="og:description" content={device.excerpt} />
            <meta property="og:image" content={'https://api.moodboost.me/'+ device.image} />
            <meta property="og:url" content={`https://moodboost.me/post/${device._id}`} />
            <meta property="og:type" content='article' />
            <meta property="fb:app_id" content='384773476332427'/>
        </Head>
        <article className={stylePost.main_article, stylePost.main_article__post}>
            <div className={stylePost.post_color}>
                <div className={stylePost.article_preview__hash}>
                    <p className={stylePost.t1}>{post?.category?.name}</p>
                    <p>{moment(post.created_at).format("DD MMM, YYYY")}</p>
                </div>
                <h1 className={stylePost.main_article__title}>{post.title}</h1>
                <ActionBoxPost 
                device={device} 
                hendleLikeClick={hendleLikeClick} 
                scrollToMyRef={scrollToMyRef} 
                OpenSharePopup={OpenSharePopup}
                scroll={scroll}
                bool={true}
                />
                <p className={stylePost.post_excerpt}>{post.excerpt}</p>
                <div className={stylePost.post_body} dangerouslySetInnerHTML={{ __html: post.body }} />
                <ActionBoxPost 
                    device={device} 
                    hendleLikeClick={hendleLikeClick} 
                    scrollToMyRef={scrollToMyRef} 
                    OpenSharePopup={OpenSharePopup}
                    scroll={scroll}
                    bool={false}
                />
            </div>
        <div ref={com} className={stylePost.sign_up_weekly__container}>
            <SignUpWeekly /> 
        </div>
        <Comments post={post}/>
    </article>
</>
    )
}

export default Postr

