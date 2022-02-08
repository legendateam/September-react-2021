import axiosInstance from "./axios.service";
import {ICar, ICarService} from "../interfaces";
import {urls} from "../configs";

const carService:ICarService = {
    getAll: () => axiosInstance.get<ICar[]>(urls.cars),
    create: (car)=> axiosInstance.post<ICar>(urls.cars, car),
    update: (id, car) => axiosInstance.patch<ICar>(`${urls.cars}/${id}`, car),
    delete: (id)=> axiosInstance.delete(`${urls.cars}/${id}`)
}

export default carService

// with interface ------

// const carService = {
//     getAll: () =>axiosInstance.get<ICar[]>(urls.cars),
//     create: (car: ICar)=> axiosInstance.patch<ICar>(urls.cars, car),
//     update: (id: number, car:ICar) => axiosInstance.patch<ICar>(`${urls.cars}/${id}`, car),
//     delete: (id: number)=> axiosInstance.delete(`${urls.cars}/${id}`)
// }
//
// export default carService


// no interface