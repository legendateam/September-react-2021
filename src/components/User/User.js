import React from 'react';

const User = ({user}) => {
    return (
        <div>
            <h2>{user.id}: {user.name} {user.username}</h2>
            <p>{user.email} {user.phone} {user.website}</p>
        </div>
    );
};

export {User};