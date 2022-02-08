import React, {FC} from 'react';

import {ICarProps} from "../../interfaces";
import {useAppDispatch} from "../../hooks";
import {deleteCarThunk, updateCar} from "../../store";

const Car:FC<ICarProps> = ({car, index}) => {
    const {id,year,price,model} = car;

    const dispatch = useAppDispatch();

    const onDelete = () => {
        dispatch(deleteCarThunk({id,index}))
    }

    const onUpdate = () => {
        dispatch(updateCar({car, index}))
    }

    return (
        <div>
            <div>{model}</div>
            <div>{price}</div>
            <div>{year}</div>
            <div>
                <button onClick={onUpdate}>UPDATE</button>
                <button onClick={onDelete}>DELETE</button>
            </div>
        </div>
    );
};

export {Car};