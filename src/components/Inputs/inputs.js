import React from 'react';
import {useSelector} from "react-redux";

import './Inputs.css'
import Input from "../Input/Input";

const Inputs = () => {
    const {inputs} = useSelector(state => state['inputReducer']);
    console.log(inputs);

    return (
        <div className={'newData__input'}>
            {
                inputs.map((input, index) => <Input  key={input.id} input={input} index={index}/>)
            }
        </div>
    );
};

export default Inputs;