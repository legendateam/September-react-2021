import React, {createRef, useState} from 'react';

import "./UserDetails.css"
import {usersServices} from "../../services/users.services";
import Posts from "../Posts/Posts";
import UserDetail from "../userDetail/UserDetail";
import createUserDetails from "../../services/createUserDetails.services";

function UserDetails({user}) {

    let arr = [];

    let [userDetails, setUserDetails] = useState(null);

    const iterObj = (objects) => {
        for (const object in objects) {
            recUser(objects[object]);
            if(typeof objects[object] !== 'object') {
                arr.push(objects[object]);
                setUserDetails(arr.join(' '))
            }
        }

    }
    const onStartRec = () => {
        !userDetails ? recUser(user) : setUserDetails(null)
    }
    const recUser = (objects)  => {
        if (typeof objects === 'object') {
            return iterObj(objects);
        }
    }


    return (
        <>
            <button onClick={onStartRec}>show details</button>
            <div>
                <UserDetail userDetails={userDetails} id={user.id}/>
            </div>
        </>
    );
}

export default UserDetails;