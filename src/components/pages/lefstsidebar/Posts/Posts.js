import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './Posts.module.css'
import {postsServices} from '../../../../services/posts.services';
import Post from '../Post/Post';

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsServices.getAll().then(post => setPosts([...post]))
    },[])
    return (
        <div className={css.lefsidebar__posts}>
            <div className={css.posts}>
                {
                    posts.map(post => <Post key={post.id} post={post}/>)
                }
            </div>
            <div className={css.posts__detail}>
                <Outlet/>
            </div>
        </div>
    );
};

export {Posts};