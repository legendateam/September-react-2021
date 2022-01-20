import React from 'react';
import {Link} from "react-router-dom";

import './Post.css'

const Post = ({post:{id,title}}) => {
    return (
        <div className={'post'}>
            <Link to={id.toString()}><h4>{title}</h4></Link>
        </div>
    );
};

export default Post;