import React from 'react';

import './App.css';
import Users from "./components/Users/Users";
import Post from "./components/Post/Post";
import createUserDetails from "./services/createUserDetails.services";



const App = () => {
    return (
        <div className={'App'}>
            <Users/>
        </div>
    );
};

export default App;
