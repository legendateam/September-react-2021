import React, {useEffect, useState} from 'react';
import {usersServices} from "../../services/users.services";

import User from "../User/User";
import './Users.css'
import UserDetails from "../userDetails/UserDetails";
import Posts from "../Posts/Posts";
import UserDetail from "../userDetail/UserDetail";
import showUserDetails from "../../services/createUserDetails.services";
import createUserDetails from "../../services/createUserDetails.services";
import postsServices from "../../services/posts.services";
import createUserDetailsServices from "../../services/createUserDetails.services";
import Posts2 from "../Posts/Posts2";


const Users = () => {


    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersServices().getAll().then(users => setUsers(users));
    },[]);

    // let [posts, setPosts] = useState([]);


    // useEffect(() => {
    //         usersServices().getPosts(1).then(post => {setPosts(post)})
    //         console.log(posts);
    //     },[])


        // useEffect(() => {
        //     usersServices().getPosts(btn.value).then(value => {
        //         setPosts(value)
        //     })
        // },[])

    //
    // const onGetId = (id) => {
    //         if(!posts.length) {
    //             usersServices().getPosts(id).then(post => setPosts(post))
    //         }
    //         setPosts([])
    //     }


    let [posts, setPosts] = useState([]);
    useEffect(()=> {
        if (!posts.length) {
            usersServices().getPosts(1).then(post => setPosts(post))
        }
        setPosts([])
    },[])

    return (
        <div className={"users"}>
                {
                    users.map(user => <User key={user.id} user={user}/>)
                }

                <Posts2/>

        </div>
    );
};

export default Users;
