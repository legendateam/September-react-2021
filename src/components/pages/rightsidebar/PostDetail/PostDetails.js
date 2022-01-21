import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {postsServices} from "../../../../services/posts.services";
import Details from './Details';

const PostDetails = () => {
    const location = useLocation();
    const state = location.state;
    console.log(state);

    const params = useParams();
    const id = params.id;

    const [details, setDetails] = useState({});

    useEffect(()=> {
        if(!state) {
            postsServices.getOne(id).then(post => setDetails(post))
        }
        setDetails(state)
    },[id])

    return (
        <div>
            <Details details={details}/>
            <Outlet/>
        </div>
    );
};

export {PostDetails};