import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css'
import {Wrap, Users, UserDetails, UserPosts, Posts, PostDetails, Comments} from './index'

const App = () => {
    const getState = state => state;

    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Wrap/>}>

                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails getState={getState}/>}>
                            <Route path={'posts'} element={<UserPosts getState={getState}/>}/>
                            </Route>
                    </Route>

                    <Route path={'posts'} element={<Posts/>}>
                        <Route path={':id'} element={<PostDetails/>}>
                            <Route path={'comments'} element={<Comments/>}/>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};

export default App;
