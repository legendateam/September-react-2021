import React from 'react';

const Comment = ({comments: {postId, id, name, email, body}}) => {
    return (
        <div>
            {postId} {id} {name} {email} {body}
        </div>
    );
};

export default Comment;