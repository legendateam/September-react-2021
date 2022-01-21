import React from 'react';
import {Route, Routes} from 'react-router-dom';

import './App.css'
import {Wrap, Users, UserDetails, UserPosts, Posts, PostDetails, Comments, Albums, Photos} from './index'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Wrap/>}>

                    <Route path={'users'} element={<Users/>}>
                        <Route path={':id'} element={<UserDetails/>}>
                            <Route path={'posts'} element={<UserPosts/>}/>
                        </Route>
                        <Route path={':id/albums'} element={<Albums/>}>
                            <Route path={':albumId/photos'} element={<Photos/>}/>
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
