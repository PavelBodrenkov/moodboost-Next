import Header from "../components/Header";
import React, {useEffect, useState} from 'react';
import stylesMain from '../styles/MainContainer.module.scss';
import HashTags from './HashTags';
import CardMiddle from '../components/CardMiddle';
import Head from 'next/head';
import SignUpWeekly from '../components/SignUpWeekly/SignUpWeekly'
import PopupAuth from "./PopupAuth/PopupAuth";
import { observer } from "mobx-react-lite";
import postStore from "../store/postStore";
import {useRouter} from 'next/router';
import categoryStore from "../store/categoryStore";
import ScrollUp from "./scrollUp/ScroppUp";

const MainContainer = observer(({cards, categories, children}) => {

    const router = useRouter()

    function visibleLogoLife () {
        if(router.pathname === ('/') || router.pathname === ('/category/[id]')) {
            return true
        } else {
            return false
        }
    }

    function escClose(event) {
        if (event.target.classList.contains("openAside")) {
            categoryStore.setIsAsideOpen(!categoryStore.isAsideOpen)
        }
    }

    return (
        <>
       <Head>
           <title>{categoryStore.oneCategory.name === undefined ? 'moodboost' : categoryStore.oneCategory.name}</title>
           <link rel="shortcut icon" type="image/png" href="../public/image/favicons/android-icon-36x36.png" />
       </Head>
        <Header />
        
        <div id={stylesMain.app_moodboost} className={`container ${stylesMain.main_posts}`}>
            <div onClick={(e) => escClose(e)} className={`${stylesMain.tags_list} ${categoryStore.isAsideOpen && stylesMain.openAside}`}>
                <HashTags visibCategory={categories} /> 
            </div>
            <div id={stylesMain.page}>
                
            <main  className={stylesMain.feed}>
                {/* {visibleLogoLife() && <h4 className="feed__title">{`${categoryStore.oneCategory === undefined ? 'Life' : `Life-${categoryStore.oneCategory}`}`}</h4>} */}
               { visibleLogoLife() && <h4 className={stylesMain.feed__title}>{`${categoryStore.oneCategory.name === undefined ? 'Life' : `Life-${categoryStore.oneCategory.name}`}`}</h4>}
                {children}
            </main>
                <section id={stylesMain.sidebar} data-v-c1e3d870>
                    <div>

                    </div>
                    <div className={stylesMain.content_slidebar}>
                        <div className={stylesMain.content_slidebar_signWeekly}>
                            <SignUpWeekly />
                        </div>
                        {postStore?.middlePost?.map((card) => {
                            return(
                                <CardMiddle card={card} key={card._id}/>
                            )
                        })
                        }
                    </div>
                </section>
            </div>
        </div>
        <PopupAuth />
        <ScrollUp/>
    </>
    )
})

export default MainContainer
