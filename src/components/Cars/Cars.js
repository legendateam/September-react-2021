import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllCarsThunk} from "../../store/carSlice";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllCarsThunk())
    }, [])

    return (
        <div>
            {cars.map((car, i) => <Car key={car.id} car={car} index={i}/>)}
        </div>
    );
};

export {Cars};