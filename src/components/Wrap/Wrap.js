import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../Header/Header";
// import './Wrap.css'

const Wrap = () => {
    return (
        <div>
            <Header/>
            <Outlet/>
            {/*<div className={'btn__Previous_Next'}>*/}
            {/*    <button>Previous</button>*/}
            {/*    <button>Next</button>*/}
            {/*</div>*/}
        </div>
    );
};

export {Wrap};