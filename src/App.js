import React from 'react';
import {Route, Routes} from "react-router-dom";

import './App.css'
import {Wrap, Episodes, EpisodeDetails} from './index'

const App = () => {
    return (
        <div>
            <Routes>
                <Route path={'/'} element={<Wrap/>}>
                    <Route index element={<Episodes/>}/>
                    <Route path={':id'} element={<EpisodeDetails/>}/>
                </Route>
            </Routes>
        </div>
    );
};

export default App;