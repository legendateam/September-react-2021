import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getAllPosts} from "../../store";
import {Post} from "../Post/Post";

const Posts = () => {
    const {posts} = useSelector(state => state['postReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getAllPosts())
    },[])

    return (
        <div>
            {
                posts.map(post => <Post key={post.id} post={post}/>)
            }
            <Link to={'/'}><button>back to home</button></Link>
        </div>
    );
};

export {Posts};