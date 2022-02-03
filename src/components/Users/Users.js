import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getAllUsers} from "../../store";
import {User} from "../User/User";

const Users = () => {
    const {users, status, error} = useSelector(state => state['userReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers())
    }, []);

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {
                users.map(user => <User key={user.id} user={user}/>)
            }
            <Link to={'/'}>
                <button>back home</button>
            </Link>
        </div>
    );
};

export {Users};