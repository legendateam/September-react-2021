import { AxiosResponse } from "axios";

import {ICar} from "../car.interface";

export interface ICarService {
    getAll: () => Promise<AxiosResponse>,
    create: (car: ICar) => Promise<AxiosResponse>,
    update: (id: number | undefined, car: ICar) => Promise<AxiosResponse>,
    delete: (id: number | undefined) => void
}
