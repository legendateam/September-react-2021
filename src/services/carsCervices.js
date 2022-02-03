import axiosInstance from "./axiosServices";
import {urls} from "../configs";

const carsCervices = {
    getAll: async ()=> {
        const cars = await axiosInstance.get(urls.cars)
        return cars.data
    },
    create: async (car)=> {
        const addCar = await axiosInstance.post(urls.cars, car)
        return addCar.data
    },
    updateById: async (id, car) => {
        const carUpdate = await axiosInstance.patch(`${urls.cars}/${id}`, car)
        return carUpdate.data
    },
    deleteById: async (id) => await axiosInstance.delete(`${urls.cars}/${id}`)
}
export {carsCervices}