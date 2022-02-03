import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import './Cars.css'
import {getAllCarsThunk} from "../../store/carSlice";
import {Car} from "../Car/Car";

const Cars = () => {
    const {cars,status,error} = useSelector(state => state['carReducer']);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllCarsThunk())
    }, [])

    return (
        <div className={'cars'}>
            {status === 'pending' && <h1>Loading</h1>}
            {status === 'rejected'&& <h1>{error}</h1>}
            {
                cars.map((car, i) => <Car key={car.id} car={car} index={i}/>)
            }
        </div>
    );
};

export {Cars};