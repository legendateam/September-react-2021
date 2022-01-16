import React, {useEffect, useState} from 'react';

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

const App = () => {
    return (
        <div className={'App'}>
            <Users/>
            <Posts/>
        </div>
    );
};

export default App;
