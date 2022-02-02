import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {addCarThunk, updateCarThunk} from "../../store/car.slice";
import {useDispatch, useSelector} from "react-redux";

import './Form.css'

const Form = () => {
    const {register, handleSubmit, reset, setValue} = useForm();

    const {update:{id, model, price, year}} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();

    const submit = car => {
        if(id) {
            dispatch(updateCarThunk({id, car}))
            reset()
            return
        }
        dispatch(addCarThunk({car}))
        reset()
    }

    useEffect(()=> {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    },[id])

    return (
        <>
            <div className={'header'}>
                <form onSubmit={handleSubmit(submit)}>
                    <label>Model: <input type="text" {...register('model')}/></label>
                    <label>Price: <input type="text" {...register('price')}/></label>
                    <label>Year: <input type="text" {...register('year')}/></label>
                    <button>{id? 'UPDATE': 'SAVE'}</button>
                </form>
            </div>
            <hr/>
        </>
    );
};

export {Form};