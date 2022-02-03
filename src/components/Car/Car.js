import {useDispatch} from "react-redux";
import React from 'react';

import './Car.css'
import {deleteCarThunk, getIndex, updateCar} from "../../store/car.slice";

const Car = ({car, index}) => {
    const {id, model, price, year} = car;
    const dispatch = useDispatch();

    const onDelete = () => dispatch(deleteCarThunk({id, index}))
    const onUpdate = () => {
        dispatch(updateCar({car}));
        dispatch(getIndex({index}))
    }
    return (
        <div>
            <div><span className={'main__title'}>Model:</span> {model}</div>
            <div><span className={'main__title'}>Price:</span> {price}</div>
            <div><span className={'main__title'}>Year:</span>  {year}</div>
            <button onClick={()=>onDelete()}>DELETE</button>
            <button onClick={()=>onUpdate()}>UPDATE</button>
        </div>
    );
};

export {Car};