import React from 'react';

import './Header.css'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div>
            <div className={"back"}>
                <Link to={'/'}>Rick and Morty!</Link>
            </div>
            <div className={"title"}>
                <h1>Rick and Morty episodes!</h1>
            </div>
        </div>
    );
};

export {Header};