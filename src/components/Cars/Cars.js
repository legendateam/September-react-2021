import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";

import './Cars.css'
import {Car} from "../Car/Car";
import {getAllCars} from "../../store/car.slice";

const Cars = () => {
    const {cars} = useSelector(state => state.carReducer);
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getAllCars())
    },[])

    return (
        <div className={'main'}>
            {cars.map((car, index) => <Car key={car.id} car={car} index={index}/>)}
            <div className={'navigate__button_top'}>
                <a href="#"><button>top</button></a>
            </div>
        </div>
    );
};

export {Cars};