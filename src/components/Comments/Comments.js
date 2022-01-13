import {useEffect, useState} from "react";

import Comment from "../Comment/Comment";
import './Comments.css'

function Comments() {

    let [comments , setComments] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(comment => setComments(comment))
    },[])

    return (
        <div className='comments'>
            {comments.map(comment => <Comment
                key={comment.id}
                postId={comment.postId}
                id={comment.id}
                name={comment.name}
                email={comment.email}
                body={comment.body}
            />)}
        </div>
    );
}

export default Comments;