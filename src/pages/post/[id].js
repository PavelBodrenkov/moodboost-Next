import {useRouter} from 'next/Router';
import MainContainer from '../../../components/MainContainer';
import Poster from '../post'
import MainPosts from '../../../components/MainPosts';
import {useEffect, useState} from 'react'
import { async } from 'regenerator-runtime';

export default function Post ({user, posts}) {
console.log(posts)
    const {query} = useRouter()
    const [data, seetData] = useState([])

    
// useEffect(() => {
//     async function load () {
//         const response = await fetch('https://api.moodboost.me/posts')
//         const users = await response.json();
//         seetData(users[0])
//     }
//     load()
  
// }, [])


    
    return (
        <MainContainer>
            <Poster post={user}/>
            <MainPosts users={posts[0]}/>
        </MainContainer>
    )
}


export async function getServerSideProps({params}) {
    const response = await fetch(`https://api.moodboost.me/posts/post/${params.id}`)
    const response2 = await fetch(`https://api.moodboost.me/posts`)
    const user = await response.json()
    const posts = await response2.json()
    return {
        props: {user, posts},
    }
}

