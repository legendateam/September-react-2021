import axiosInstance from "./axios.services";

import {urls} from "../configs/urls";

export const carServices = {
    create: (car)=> axiosInstance.post(urls.cars, car).then(value => value.data),
    getAll: ()=> axiosInstance.get(urls.cars).then(value=> value.data),
    getById: (id)=> axiosInstance.get(`${urls.cars}/${id}`).then(value=> value.data),
    updateById: (id, car)=> axiosInstance.patch(`${urls.cars}/${id}`, car).then(value => value.data),
    deleteById: (id)=> axiosInstance.delete(`${urls.cars}/${id}`)
}