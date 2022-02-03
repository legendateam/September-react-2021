import React from 'react';
import {useDispatch} from "react-redux";

import {deleteCarThunk, updateCar} from "../../store/carSlice";

const Car = ({car, index}) => {
    const {id,model, price, year} = car;
    const dispatch = useDispatch();

    return (
        <div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={()=> dispatch(updateCar({car, index}))}>update</button>
            <button onClick={()=> dispatch(deleteCarThunk({id, index}))}>delete</button>
        </div>
    );
};

export {Car};