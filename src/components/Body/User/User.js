import React from 'react';

const User = ({user}) => {
    return (
            <h2>{user.id}. {user.name} - - {user.email}</h2>
    );
};

export default User;