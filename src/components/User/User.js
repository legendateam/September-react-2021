import React, {createRef, useEffect, useState} from 'react';


import {postsServices} from "../../services/posts.services";
import {usersServices} from "../../services/users.services";
import "./User.css"
import Posts from "../Posts/Posts";
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