import React from 'react';
import {Link} from 'react-router-dom';

import './User.css'

const User = ({user}) => {
    const {id,name} = user
    return (
        <div className={'user_btn_albums'}>
            <Link to={id.toString()} state={user}><h3>{id}) {name}</h3></Link>

            <Link to={`${id.toString()}/albums`}><button>show albums</button></Link>
        </div>
    );
};

export default User;