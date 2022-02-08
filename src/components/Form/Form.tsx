import React, {FC, useEffect} from 'react';
import {SubmitHandler, useForm} from "react-hook-form";

import {ICar} from "../../interfaces"
import {useAppDispatch, useAppSelector} from "../../hooks";
import {addCarThunk, updateCarThunk} from "../../store";

const Form:FC = () => {
    const {register,handleSubmit,reset,setValue} = useForm<ICar>();

    const {carUpdate:{id,model,price,year}}:any = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    const submit: SubmitHandler<ICar> = (car) => {
        if(id) {
            dispatch(updateCarThunk({id,car}));
            reset();
            return
        }
        dispatch(addCarThunk({car}))
        reset()
    };

    useEffect(()=> {
        setValue('model',model);
        setValue('price',price);
        setValue('year',year)
    },[id])

    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text" placeholder={'model'} {...register('model')}/>
                <input type="text" placeholder={'price'} {...register('price', {valueAsNumber:true})}/>
                <input type="text" placeholder={'year'} {...register('year', {valueAsNumber:true})}/>
                <button>{id? 'UPDATE':'SAVE'}</button>
            </form>
        </div>
    );
};

export {Form};