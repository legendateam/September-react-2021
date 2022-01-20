import React from 'react';
import {Link} from "react-router-dom";

import './User.css'

const User = ({user}) => {
    const {id,name} = user
    return (
        <div>
            <Link to={id.toString()}><h3>{id}) {name}</h3></Link>
        </div>
    );
};

export default User;