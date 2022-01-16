import React, {createRef, useEffect, useState} from 'react';

import {usersServices} from "../../services/users.services";
import Posts from "../Posts/Posts";
import "./UserDetail.css"
import showUserDetails from "../../services/createUserDetails.services";
import createUserDetails from "../../services/createUserDetails.services";
import createUserDetailsServices from "../../services/createUserDetails.services";

const UserDetail = ({userDetails,id,btn}) => {

    let [posts, setPosts] = useState([]);
    const onGetPosts = (e) => {
        const uid = e.target.value
        if (!posts.length) {
            usersServices().getPosts(uid).then(post => setPosts(post));
        }
        console.log(posts)
        setPosts([])
    };

    // const onGetPosts = (e) => {
    //     console.log(e.target.value);
    // }



    const xxx = document.getElementsByClassName("super")[0];
    if(posts.length) {
            xxx.innerHTML = `${JSON.stringify(posts)}`
    } else {
        xxx.innerHTML = ''
    }




    return (
        <div className={'UserDetail'}>
            {
                userDetails && <p>{userDetails}<button onClick={onGetPosts} value={id}>show posts</button></p>
            }

            {/*<Posts posts={posts}/>*/}

        </div>
    );
};

export default UserDetail;