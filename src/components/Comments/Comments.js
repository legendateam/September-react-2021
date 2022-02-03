import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getAllComments} from "../../store";
import {Comment} from "../Comment/Comment";


const Comments = () => {
    const {comments, status, error} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getAllComments())
    },[])

    return (
        <div>
            {status === 'pending' && <h1>Loading...</h1>}
            {status === 'rejected' && <h1>{error}</h1>}
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
            <Link to={'/'}><button>back to home</button></Link>
        </div>
    );
};

export {Comments};