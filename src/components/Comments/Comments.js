import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {getAllComments} from "../../store";
import {Comment} from "../Comment/Comment";


const Comments = () => {
    const {comments} = useSelector(state => state['commentReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
       dispatch(getAllComments())
    },[])

    return (
        <div>
            {
                comments.map(comment => <Comment key={comment.id} comment={comment}/>)
            }
            <Link to={'/'}><button>back to home</button></Link>
        </div>
    );
};

export {Comments};