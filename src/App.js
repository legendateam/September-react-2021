import React, {useEffect, useState} from 'react';

import './App.css';
import Users from "./components/Users/Users";
import Posts from "./components/Posts/Posts";

const App = () => {

    const [id, setID] = useState(null);

    const saveIdUsersForPost = (id) => {
        setID(id.target.value)
    }

    return (
        <div className={'App'}>
            <Users saveIdUsersForPost={saveIdUsersForPost}/>

            {id && <Posts id={id}/>}
        </div>
    );
};

export default App;
