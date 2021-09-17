import styleCardMiddle from '../styles/CardMiddle.module.scss';
import Link from 'next/link'

function CardMiddle ({card}) {

    return (
            <article className={styleCardMiddle.article_preview_middle}>
                {/* <Link href="/post/[id]" as={`/post/${card._id}`}> */}
                    <a href={`/post/${card._id}`} as={`/post/${card._id}`}>
                        <div className={styleCardMiddle.article_preview_middle__container_photo}>
                            <img src={'https://api.moodboost.me/' + card.image.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + card.image.split('.').pop()} alt="" className={styleCardMiddle.article_preview_middle__photo}/>
                        </div>
                    </a>
                {/* </Link> */}
                
                    <h3 className={styleCardMiddle.article_preview_middle__title}>{card.title}</h3> 
            </article>
    )
}

export default CardMiddle