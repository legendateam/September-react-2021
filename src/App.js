import {useState} from "react";

import "./App.css";
import Form from "./components/Form/Form";
import Cars from "./components/Cars/Cars";

function App() {
    const [cars, setCars] = useState({});
    const [carForUpdate, setCarForUpdate] = useState({})
        return (
            <div>
                <Form update={setCars} carForUpdate={carForUpdate}/>
                <Cars trigger={cars} update={setCars} setCarForUpdate={setCarForUpdate}/>
            </div>
        );
}

export default App;

