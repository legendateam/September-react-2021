import React, {useEffect, useState} from 'react';
import {Outlet} from 'react-router-dom';

import css from './Users.module.css'
import {usersServices} from "../../../../services/users.services";
import User from "../User/User";

const Users = () => {
    const [users,setUsers] = useState([]);

    useEffect(() => {
        usersServices.getAll().then(user => setUsers([...user]))
    },[])
    return (
        <div className={css.users}>
            <div>
                {
                   users.map(user => <User key={user.id} user={user}/>)
                }
            </div>
            <Outlet/>
        </div>
    );
};

export {Users};