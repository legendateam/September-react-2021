import React from 'react';


import "./User.css"
import UserDetails from "../userDetails/UserDetails";

const User = ({user,saveIdUsersForPost}) => {
    return (
        <div className={"user"}>
                <h2>{user.id} - {user.name}</h2>
                <UserDetails user={user} saveIdUsersForPost={saveIdUsersForPost} />
        </div>

    );
};

export default User;