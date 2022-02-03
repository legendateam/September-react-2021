import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {Link, Outlet} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import './Form.css'
import {addCarThunk, updateCarThunk} from "../../store/carSlice";

const Form = () => {
    const {register,handleSubmit,reset,setValue} = useForm();

    const {carUpdate: {id, model, price, year}} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    const submit = car => {
        if(id) {
            dispatch(updateCarThunk({car, id}))
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
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <label>Model:<input type="text" {...register('model')}/></label>
                <label>Price:<input type="text" {...register('price')}/></label>
                <label>Year:<input type="text" {...register('year')}/></label>
                <button>{id? 'UPDATE': 'SAVE'}</button>
            </form>
            <hr/>
            <Outlet/>

            <div className={'linksUsersPostsComments__button'}>
                <Link to={'users'}><button>users</button></Link>
                <Link to={'posts'}><button>posts</button></Link>
                <Link to={'comments'}><button>comments</button></Link>
            </div>
        </div>
    );
};

export {Form};