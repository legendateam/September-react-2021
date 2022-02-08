import {ICar} from "../car.interface";

export interface IStateCar {
    cars: ICar[],
    carUpdate:  ICar | {},
    index: number,
    status: string | null,
    error: string | null
}