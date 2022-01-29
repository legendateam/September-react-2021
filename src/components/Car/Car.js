import React from 'react';
import {carServices} from "../../services/car.services";

const Car = ({car, update, setCarForUpdate}) => {
    const {id,model,price,year} = car;

    const deleteCar = async () => {
        await carServices.deleteById(id);
        update({})
    }

    return (
        <div>
            <div>id: {id}</div>
            <div>model: {model}</div>
            <div>price: {price}</div>
            <div>year: {year}</div>
            <button onClick={()=> setCarForUpdate(car)}>Update</button>
            <button onClick={()=> deleteCar()}>Delete</button>
            <hr/>
        </div>
    );
};

export default Car;