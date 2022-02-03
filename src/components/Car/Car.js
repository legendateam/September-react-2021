import React from 'react';
import {useDispatch} from "react-redux";

import './Car.css'
import {deleteCarThunk, getIndex, updateCar} from "../../store/carSlice";

const Car = ({car, index}) => {
    const {id,model, price, year} = car;
    const dispatch = useDispatch();

    const onUpdate = () => {
        dispatch(updateCar({id,car}));
        dispatch(getIndex({index}))
    }

    const onDelete = () => {
        dispatch(deleteCarThunk({id, index}))
    }

    return (
        <div className={'car'}>
            <div><span>Model:</span> {model}</div>
            <div><span>Price:</span> {price}</div>
            <div><span>Year:</span> {year}</div>
            <button onClick={()=>onUpdate()}>update</button>
            <button onClick={()=>onDelete()}>delete</button>
        </div>
    );
};

export {Car};