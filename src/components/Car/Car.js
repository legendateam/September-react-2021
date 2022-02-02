import {useDispatch} from "react-redux";
import React from 'react';

import './Car.css'
import {deleteCarThunk, updateCar} from "../../store/car.slice";

const Car = ({car}) => {
    const {id, model, price, year, index} = car;
    const dispatch = useDispatch();
    return (
        <div>
            <div><span className={'main__title'}>Model:</span> {model}</div>
            <div><span className={'main__title'}>Price:</span> {price}</div>
            <div><span className={'main__title'}>Year:</span>  {year}</div>
            <button onClick={()=>dispatch(deleteCarThunk({id, index}))}>DELETE</button>
            <button onClick={()=>dispatch(updateCar({car, index}))}>UPDATE</button>
        </div>
    );
};

export {Car};