import "./App.css";
import {Route, Routes} from "react-router-dom";

import {Cars, Form} from "./components";

function App() {
        return (
            <div>
                <Routes>
                    <Route path={'/'} element={<Form/>}>
                        <Route index element={<Cars/>}/>
                    </Route>
                </Routes>
            </div>
        );
}

export default App;

