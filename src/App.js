import "./App.css";
import {Route, Routes} from "react-router-dom";

import {Cars, Comments, Form, Posts, Users} from "./components";

function App() {
        return (
            <div>
                <Routes>
                    <Route path={'/'} element={<Form/>}>
                        <Route index element={<Cars/>}/>

                        <Route path={'users'} element={<Users/>}/>
                        <Route path={'posts'} element={<Posts/>}/>
                        <Route path={'comments'} element={<Comments/>}/>
                    </Route>
                </Routes>
            </div>
        );
}

export default App;

