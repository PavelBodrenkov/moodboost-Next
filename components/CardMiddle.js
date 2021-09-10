import styleCardMiddle from '../styles/CardMiddle.module.scss';


const CardMiddle = ({card}) => {

    console.log(window.location.href.slice(22, 26) === 'post' ? `/${card._id}` : 'post/' + card._id)

    return (
            <article className={styleCardMiddle.article_preview_middle}>
                
                <a href={window.location.href.slice(22, 26) !== '' ? `${card._id}` : 'post/' + card._id}>
                    <div className={styleCardMiddle.article_preview_middle__container_photo}>
                        <img src={'https://api.moodboost.me/' + card.image.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + card.image.split('.').pop()} alt="" className={styleCardMiddle.article_preview_middle__photo}/>
                    </div>
                </a>
                    <h3 className={styleCardMiddle.article_preview_middle__title}>{card.title}</h3> 
            </article>
    )
}

export default CardMiddle