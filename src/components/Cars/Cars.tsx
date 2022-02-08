import {FC, useEffect} from "react";

import {useAppDispatch, useAppSelector} from "../../hooks";
import {getAllCarsThunk} from "../../store";
import {Car} from "../Car/Car";
import {AsynchronousEventsEnum} from "../../enums";

const Cars:FC = () => {
    const {cars,status,error} = useAppSelector(state => state.carReducer);
    const dispatch = useAppDispatch();

    useEffect(() => {
            dispatch(getAllCarsThunk())
    }, []);

    return (
        <div>
            {status === AsynchronousEventsEnum.pending? <h1>Loading</h1> : null}
            {status === AsynchronousEventsEnum.rejected? <h1>{error}</h1>: null}
            {
                cars.map((car,index) => <Car key={car.id} car={car} index={index}/>)
            }
        </div>
    );
};

export {Cars};