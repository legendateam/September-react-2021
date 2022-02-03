import React from 'react';

const Comment = ({comment}) => {
    return (
        <div>
            <h2>{comment.id} - {comment.name}</h2>
            <h4>{comment.email}</h4>
            <p>{comment.body}</p>
        </div>
    );
};

export {Comment};