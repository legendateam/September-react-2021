import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div className={'post'}>
            <Link to={id.toString()} state={post}><h4>{title}</h4></Link>
        </div>
    );
};

export default Post;