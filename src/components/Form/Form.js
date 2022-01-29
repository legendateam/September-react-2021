import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";

import {carServices} from "../../services/car.services";
import {CarValidators} from "../../validators/car.validators";

const Form = ({update, carForUpdate:{id,model,price,year}}) => {
    const {
        register, handleSubmit, watch, formState: {errors}, setValue
    } = useForm({resolver:joiResolver(CarValidators), mode: 'onTouched'});

    // const submit = car => {
    //         carServices.create(car).then(value => value).catch(errors=> console.log(errors.response.data))
    // }

    const submit = async car => {
        try {
            if(id) {
                const carUpdate = carServices.updateById(id, car);
                update(carUpdate);
                return
            }
            const newCar = await carServices.create(car);
            update(newCar)
        } catch(errors) {
            console.log(errors.response.data)
        }
    }

    useEffect(()=> {
        setValue('model', model)
        setValue('price', price)
        setValue('year', year)
    },[id])
    return (
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <div><label>Model:<input type="text" defaultValue={''} {...register('model')}/></label></div>
                {errors.model && <span>{errors.model.message}</span>}
                <div><label>Price:<input type="text" defaultValue={''} {...register('price')}/></label></div>
                {errors.price && <span>{errors.price.message}</span>}
                <div><label>Year:<input type="text" defaultValue={''} {...register('year')}/></label></div>
                {errors.year && <span>{errors.year.message}</span>}
                <button>{id? 'Update': 'Create'}</button>
            </form>
        </div>
    );
};

export default Form;