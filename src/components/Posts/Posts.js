import React, {useEffect, useState} from 'react';

import {usersServices} from "../../services/users.services";
import Post from "../Post/Post";
import "./Posts.css"

const Posts = ({posts,id}) => {
    // const [posts, setPosts] = useState([]);
    //
    // useEffect(() => {
    //     usersServices().getPosts(id).then(post => setPosts(post))
    // },[])

    return (
        <div className={"posts"}>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;