import React from 'react';

const UserPost = ({posts:{id,title,body}}) => {
    return (
        <div>
            {id} {title} {body}
        </div>
    );
};

export default UserPost;