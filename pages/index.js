import MainContainer from '../components/MainContainer';
import MainPosts from '../components/MainPosts';
import {observer} from 'mobx-react-lite';
import postStore from '../store/postStore';
import React, {useEffect} from 'react'
import ScrollUp from '../components/scrollUp/ScroppUp'


const index = observer(({cards, categories, count, cardMiddle}) => {
    useEffect(() => {
        postStore.setMiddlePost(cardMiddle)
        postStore.setPosts(cards)
        postStore.setPostCount(count)
    }, [])
    

    return (
        <>
        <MainContainer cards={postStore.middlePost} categories={categories}>
            <MainPosts users={postStore.posts} />
        </MainContainer>
        <ScrollUp/>
        </>
    )
})

export default index

export async function getServerSideProps ({query})  {  
    // const pruducts = await Api.fetchProducts()
    const response = await fetch(process.env.API_HOST + `posts?limit=12&skip=0`)
    const response2 = await fetch(process.env.API_HOST + 'categories')
    const cards = await response.json();
    const categories = await response2.json();

    
    return {
        props: {cards: cards[0], categories, count: cards[1], cardMiddle: cards[2]}
    }
}