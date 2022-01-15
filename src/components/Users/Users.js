import React, {useEffect, useState} from 'react';
import {usersServices} from "../../services/users.services";

import User from "../User/User";


const Users = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersServices().getAll().then(users => setUsers(users));
    },[])

    return (
        <div>
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
        </div>
    );
};

export default Users;
