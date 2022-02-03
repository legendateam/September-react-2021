import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getAllPosts} from "../../store";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts, status, error} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getAllPosts())
    },[])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
            <Link to={'/'}><button>back to home</button></Link>
        </div>
    );
};

export {Posts};