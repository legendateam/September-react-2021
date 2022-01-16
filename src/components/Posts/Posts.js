import React, {useEffect, useState} from 'react';

import Post from "../Post/Post";
import {usersServices} from "../../services/api/users.services";

const Posts = ({id}) => {
    let [posts, setPosts] = useState([]);
    useEffect(()=> {
        usersServices().getPosts(id).then(post => setPosts(post));

    },[id])
    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
        </div>
    );
};

export default Posts;