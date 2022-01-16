import React from 'react';

import "./Post.css"
import createUserDetails from "../../services/createUserDetails.services";

const Post = ({post:{id,title,body}}) => {
    // createUserDetails(id,title,body)
   return (
          <div className={"post"}>
             <h3>{id}) {title}</h3>
             {body}
          </div>
   )

};

export default Post;