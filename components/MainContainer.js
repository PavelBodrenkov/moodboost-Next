import Header from "../components/Header";
import React, {useEffect, useState} from 'react';
import stylesMain from '../styles/MainContainer.module.scss';
import HashTags from './HashTags';
import CardMiddle from '../components/CardMiddle';





function MainContainer({children}) {
const [middleCard, serMiddleCard] = useState([])
const [categories, setCategories] = useState([])

useEffect( () => {
    async function loadMiddleCard () {
        const response = await fetch('https://api.moodboost.me/categories')
        const response2 = await fetch('https://api.moodboost.me/posts')
        const category = await response.json()
        const card = await response2.json()

        setCategories(category)
        serMiddleCard(card[0])
    }
    loadMiddleCard()
    
}, [])


    return (
        <>
        <Header />
        <div id={stylesMain.app_moodboost} className={`container ${stylesMain.main_posts}`}>
            <div  className={stylesMain.tags_list}>
        <HashTags visibCategory={categories} /> 
            </div>
            <div id={stylesMain.page}>
            <main  className={stylesMain.feed}>
                {children}
                {/* {visibleLogoLife() && <h4 className="feed__title">{`${category.selectedCategory.name === undefined ? 'Life' : `Life-${category.selectedCategory.name}`}`}</h4>} */}
            {/* <Main scrollDownPost={scrollDownPost} hendleLikeClick={hendleLikeClick} card={post.posts} isLoad={isLoad} shareCard={shareCard} shareClick={shareClick}/> */}
            </main>
                <section id={stylesMain.sidebar} data-v-c1e3d870>
                    <div>
                    
                    </div>
            
                    <div className={stylesMain.content_slidebar}>
                        <div className={stylesMain.content_slidebar_signWeekly}>
                            {/* <SignUpWeekly /> */}
                        </div>
                    
                        {middleCard.map((card) => {
                                return(
                                    <CardMiddle card={card} key={card._id}/>
                                )
                            })
                        }
                    </div>
                </section>
            </div>
            {/* {cardShare.url && cardShare.img && 
            <PopupShare log={'https://moodboost.me/main/post/' + cardShare.url}  
            img={'https://api.moodboost.me/' + cardShare.img.split('.').slice(0, -1).join('.') + "-" + 'medium' + '.' + cardShare.img.split('.').pop()} 
            id={cardShare.id} shareClick={cardShare.clicks}/>} */}
        </div>
    </>
    )
}

export default MainContainer
