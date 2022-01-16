import React, {useEffect, useState} from 'react';

import {usersServices} from "../../services/api/users.services";
import User from "../User/User";
import './Users.css'


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersServices().getAll().then(users => setUsers(users));
    },[]);

    return (
        <div className={"users"}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }

        </div>
    );
};

export default Users;
