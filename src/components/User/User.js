import React from 'react';


import "./User.css"
import UserDetails from "../userDetails/UserDetails";

const User = ({user}) => {
    return (
        <div className={"user"}>
                <h2>{user.id} - {user.name}</h2>
                <UserDetails user={user}  />
        </div>

    );
};

export default User;