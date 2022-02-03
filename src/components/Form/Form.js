import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import './Form.css'
import {addInput} from "../../store/input.slice";
import Inputs from "../Inputs/inputs";

const Form = () => {
    const {register, handleSubmit, reset} = useForm();

    const dispatch = useDispatch();

    const submit = data => {
        dispatch(addInput({data}))
        reset()
    }

    return (
        <>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'todo'} {...register('todo')}/>
                <button>Save</button>
            </form>
            <hr/>
            <Inputs/>
        </>
    );
};

export default Form;