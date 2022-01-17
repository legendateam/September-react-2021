import React, {useState} from 'react';

import "./UserDetails.css"
import UserDetail from "../userDetail/UserDetail";

function UserDetails({user, saveIdUsersForPost}) {

    let arr = [];

    let [userDetails, setUserDetails] = useState(null);

    const iterObj = (objects) => {
        for (const object in objects) {
            recUser(objects[object]);
            if (typeof objects[object] !== 'object') {
                arr.push(objects[object]);
                setUserDetails(arr.join(' '))
            }
        }

    }
    const onStartRec = () => {
        !userDetails ? recUser(user) : setUserDetails(null)
    }
    const recUser = (objects) => {
        if (typeof objects === 'object') {
            return iterObj(objects);
        }
    }

    return (
        <>
            <button onClick={onStartRec}>show details</button>
            <div>
                <UserDetail userDetails={userDetails} id={user.id} saveIdUsersForPost={saveIdUsersForPost}/>
            </div>
        </>
    );
}

export default UserDetails;