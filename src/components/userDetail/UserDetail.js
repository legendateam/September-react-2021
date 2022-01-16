import React, {useState} from 'react';

import {usersServices} from "../../services/api/users.services";

const UserDetail = ({userDetails,id}) => {

    let [posts, setPosts] = useState([]);
    const onGetPosts = (e) => {
        const uid = e.target.value
        if (!posts.length) {
            usersServices().getPosts(uid).then(post => setPosts(post));
        }
        console.log(posts)
        setPosts([])
    };



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


        </div>
    );
};

export default UserDetail;