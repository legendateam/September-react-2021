import React, {useEffect, useState} from 'react';
import {carServices} from "../../services/car.services";
import Car from "../Car/Car";

const Cars = ({trigger, update, setCarForUpdate}) => {
    const [cars, setCars] = useState([]);

    // useEffect(()=> {
    //     carServices.getAll().then(value => setCars([...value]))
    // },[cars])

    useEffect(()=> {
        const getCars = async () => {
          try {
              const carsAll = await carServices.getAll();
              setCars([...carsAll])
          } catch (e) {
              console.log(e);
          }
        }
        getCars()
    },[trigger])

    return (
        <div>
            {cars.map(car => <Car key={car.id} car={car} update={update} setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
};

export default Cars;