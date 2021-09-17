import { observer } from 'mobx-react-lite';
import Header from '../components/Header';
import SearchForm from '../components/SearchForm/SearchForm';
import stylesMain from '../styles/MainContainer.module.scss';
import { useRouter } from 'next/router';
import postStore from '../store/postStore';
import React, {useEffect, useState} from 'react';
import MainPost from '../components/MainPosts';
import PopupAuth from '../components/PopupAuth/PopupAuth';


const Search = observer(({seatchPost}) => {
    const[load, setLoad] = useState('')
    const router = useRouter()

    useEffect(() => {
        postStore.setPosts([])
    },[])

    useEffect(() => {
        postStore.setPosts(seatchPost)
    }, [seatchPost])

    useEffect(() => {
        if(postStore.searchPost.length > 2) {
            setLoad(true)
            const query = router.query
            query.search = postStore.searchPost
            router.push({
                pathname:router.pathname,
                query:query
            })
            setLoad(false)
        } else {
            postStore.setPosts([])
        }
    }, [ postStore.searchPost ])



    return(
        <>
        <Header />
        <div id={stylesMain.app_moodboost} className="container">
            <SearchForm load={load}/> 
            <MainPost users={postStore.posts} />
        </div>
        <PopupAuth />
        </>
    )
})

export default Search

export async function getServerSideProps({query, req}) {
    const search = query.search
   
    const response = await fetch(process.env.API_HOST + `posts/search?search=${search}`)
    const seatchPost = await response.json()
    return {
        props: {seatchPost},
    }
}
