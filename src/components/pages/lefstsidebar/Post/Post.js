import React from 'react';
import {Link} from "react-router-dom";

const Post = ({post:{id,title}}) => {
    return (
        <div>
            <Link to={id.toString()}>{title}</Link>
        </div>
    );
};

export default Post;