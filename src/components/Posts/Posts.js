import {useEffect, useState} from "react";

import Post from "../Post/Post";
import './Posts.css'

function Posts() {

    let [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(post => setPosts(post))
    },[])

    return (
        <div className='posts'>
            {
                posts.map(post => <Post
                    key={post.id}
                    userId={post.userId}
                    id={post.id}
                    title={post.title}
                    body={post.body}
                />)
            }
        </div>
    );
}

export default Posts;