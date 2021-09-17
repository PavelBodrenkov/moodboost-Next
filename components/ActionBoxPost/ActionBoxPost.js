import { observer } from 'mobx-react-lite';
import share from '../../public/image/share.svg';
import like from '../../public/image/like.svg';
import point from '../../public/image/point.svg';
import watch_min from '../../public/image/watch-min.svg';
import comment_min from '../../public/image/comment-min.svg';
import like_min from '../../public/image/like-min.svg';
import share_min from '../../public/image/share-min.svg';
import commentImg from '../../public/image/comment.svg';
import stylePost from '../../styles/post.module.scss';
import userStore from '../../store/userStore';
import Image from 'next/image'


const ActionBoxPost = observer(({device, hendleLikeClick, scrollToMyRef, OpenSharePopup, scroll, bool}) => {
    let cardViews = (device.views / 1000).toFixed(1)


    const isLiked = device.likes?.some((like) => like === userStore.user.id)
    const cardLikeButtonClassName = `${stylePost.main_article__button__list} ${isLiked && 'like'}`

    // const isLiked = card.likes?.some((like) => like === userStore.user.id)
    // const cardLikeButtonClassName = `${styles.article_button__list} ${isLiked && 'like'}`


    return(
        <div className={bool ? scroll > 3500 ? stylePost.hide : `${stylePost.main_article__button} ${stylePost.main_article__button_post}` : `${stylePost.main_article__button} ${stylePost.main_article__button_post}`}>
            <nav>
                <ul className={stylePost.main_article__button_active}>
                    <li onClick={() => hendleLikeClick()} className={`${cardLikeButtonClassName} likebtn`}>
                    <Image className={stylePost.like_img} src={like} />
                            <span>Like</span>
                        </li>
                    <li onClick={() => scrollToMyRef()} className={`${stylePost.main_article__button__list} comment`}>
                            <Image className="comment-img" src={commentImg} />
                            <span>Comment</span>
                    </li>
                    <li onClick={() => OpenSharePopup()} className={`${stylePost.main_article__button__list} share`}>
                            <Image className="share-img" src={share} />
                            <span>Share</span>
                    </li>
                </ul>
            </nav>
            <nav>
                <ul className={stylePost.main_article__button_sum}>
                    <li className={`${stylePost.article_button__list_two} ${stylePost.main_article__button_list_two}`}>
                            <Image className={stylePost.article_button__min_img} src={watch_min} />
                            <span>{cardViews + 'K'}</span>
                    </li>
                    <li className={`${stylePost.article_button__list_two} ${stylePost.main_article__button_list_two}`}><Image  src={point}/></li>
                    <li className={`${stylePost.article_button__list_two} ${stylePost.main_article__button_list_two}`}>
                            <Image className={stylePost.article_button__min_img} src={like_min} />
                            <span>{device.likes?.length || 0}</span>
                        </li>
                    <li className={`${stylePost.article_button__list_two} ${stylePost.main_article__button_list_two}`}><Image src={point}/></li>
                    <li className={`${stylePost.article_button__list_two} ${stylePost.main_article__button_list_two}`}>
                        <Image className={stylePost.article_button__min_img} src={comment_min} />
                        <span>{device.commentCount || 0}</span>
                        </li>
                    <li className={`${stylePost.article_button__list_two} ${stylePost.main_article__button_list_two}`}><Image src={point}/></li>
                    <li className={`${stylePost.article_button__list_two} ${stylePost.main_article__button_list_two}`}>
                        <Image className={stylePost.article_button__min_img} src={share_min} />
                        <span>{device.shareCount || 0}</span>
                        </li>
                </ul>
            </nav>
        </div>
    )
})

export default ActionBoxPost

