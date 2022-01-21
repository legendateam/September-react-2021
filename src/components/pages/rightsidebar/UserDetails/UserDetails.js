import React, {useEffect, useState} from 'react';
import {Outlet, useLocation, useParams} from "react-router-dom";

import {usersServices} from "../../../../services/users.services";
import './Details.css'
import Details from './Details';

const UserDetails = () => {
    const location = useLocation();
    const state = location.state;

    const [detail, setDetail] = useState(null);
    const params = useParams();
    const id = params.id;

    useEffect(()=> {
        if(!state) {
            usersServices.getOne(id).then(user => setDetail(user))
        }
        setDetail(state)
    },[id])
    return (
        <div className={'user_details'}>
            {
                detail && <Details detail={detail}/>
            }
            <Outlet/>
        </div>
    );
};

export {UserDetails};