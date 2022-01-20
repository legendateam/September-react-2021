import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import './Comments.css'
import {postsServices} from "../../../../services/posts.services";
import Comment from "../Comment/Comment";

const Comments = () => {
    const params = useParams();
    const id = params.id;

    const [comments, setComments] = useState([]);

    useEffect(()=> {
        postsServices.getComments(id).then(comment => setComments([...comment]))
    },[id])
    return (
        <div className={'comments'}>
            {
                comments.map(comment => <Comment key={comment.id} comments={comment}/>)
            }
        </div>
    );
};

export {Comments};