import React, {useEffect, useState} from 'react';
import {postsServices} from "../../services/posts.services";
import {usersServices} from "../../services/users.services";

const User = ({user}) => {

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

    const startRec = () => {
        !userDetails ? recUser(user) : setUserDetails(null)
    }

    const recUser = (objects)  => {
        if (typeof objects === 'object') {
            return iterObj(objects);
        }
    }


    let [posts, setPosts] = useState([]);

    const getPosts = (e) => {
        const id = e.target.value
        usersServices().getPosts(id).then(posts => setPosts(posts))
    }


    return (
        <div>
            <h2>{user.id} - {user.name}</h2>
            <button onClick={startRec}>show details</button>
            {
                userDetails && <p>{userDetails} <button onClick={getPosts} value={user.id}>show posts</button></p>
            }

            {
                posts.map(post => <p key={post.id}>{post.id} {post.title} {post.body}</p>)
            }
        </div>
    );
};

export default User;