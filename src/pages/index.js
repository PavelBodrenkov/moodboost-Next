import MainContainer from '../../components/MainContainer';
import MainPosts from '../../components/MainPosts';
import styles from '../../styles/index.module.scss';
import Post from './post/[id]';
import {useLocation} from 'react-router-dom';
import {useRouter} from 'next/Router';


function index({users, categories}) {

    const {query} = useRouter()
    console.log(categories)
    return (
        <MainContainer>
            <MainPosts users={users[0]}/>
        </MainContainer>
    )
}

export default index

export async function getStaticProps(context) {
    const response = await fetch('https://api.moodboost.me/posts')
    const response2 = await fetch('https://api.moodboost.me/categories')
    const users = await response.json();
    const categories = await response2.json()
    
    return {
        props: {users, categories},
    }
}