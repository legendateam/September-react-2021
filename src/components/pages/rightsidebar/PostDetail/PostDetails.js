import React, {useEffect, useState} from 'react';
import {Link, Outlet, useParams} from "react-router-dom";

import {postsServices} from "../../../../services/posts.services";

const PostDetails = () => {
    const params = useParams();
    const id = params.id;

    const [detail, setDetail] = useState({});

    useEffect(()=> {
       postsServices.getOne(id).then(post => setDetail(post))
    },[id])
    return (
        <div>
            <div>
                <h4>id:{detail.id} --- detail.userId: {detail.userId}</h4>
                <p>
                    {detail.title}
                </p>
                <p>
                    {detail.body}
                </p>
            </div>
            <div>
                <Link to={'comments'}><button>show comments</button></Link>
            </div>
            <Outlet/>
        </div>
    );
};

export {PostDetails};