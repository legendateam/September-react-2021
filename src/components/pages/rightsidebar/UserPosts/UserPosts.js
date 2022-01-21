import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {usersServices} from '../../../../services/users.services';
import UserPost from '../UserPost/UserPost';
import './UserPosts.css'

const UserPosts = () => {
    const params = useParams();
    const id = params.id;
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        usersServices.getPosts(id).then(post => setPosts(post))
    }, [id])

    return (
        <div className={'userposts'}>
            {
                posts && posts.map(post => <UserPost key={post.id} posts={post}/>)
            }
        </div>
    );
};

export {UserPosts};