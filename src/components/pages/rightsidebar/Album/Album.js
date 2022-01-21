import React from 'react';
import {Link} from "react-router-dom";

const Album = ({albums: {id,title}}) => {
    return (
        <div>
            <Link to={`${id.toString()}/photos`}><h4>{id}. {title}</h4></Link>
        </div>
    );
};

export default Album;