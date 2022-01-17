import React from 'react';

const Post = ({post:{id,userId,title,body}}) => {
    return (
        <div>
                <h2>{id}.{userId})</h2>
                <div><strong>title: </strong>{title}</div>
                <div><strong>body: </strong>{body}</div>
        </div>
    );
};

export default Post;