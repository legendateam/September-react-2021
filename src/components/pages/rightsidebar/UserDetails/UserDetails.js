import React, {useEffect, useState} from 'react';
import {Outlet, useParams} from "react-router-dom";

import {usersServices} from "../../../../services/users.services";
import './Details.css'
import Details from "./Details";

const UserDetails = () => {
    const [detail, setDetail] = useState(null);
    const params = useParams();
    const id = params.id;
    useEffect(()=> {
       usersServices.getOne(id).then(user => setDetail(user))
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