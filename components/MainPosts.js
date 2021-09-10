import Card from './Card';

function MainPosts({users}) {
    return (
        <div>
            {users.map(post => {
                return(
                    <Card card={post} key={post._id}/>
                )
            })}
        </div>
    )
}

export default MainPosts

// export async function getStaticProps(context) {
//     const response = await fetch('https://api.moodboost.me/posts')
//     const users = await response.json();
    
//     return {
//         props: {users},
//     }
// }
