import axiosInstance from "./axios.cervices";
import {urls} from "../config/urls";

const carsCervices = {
    getAll: () => axiosInstance.get(urls.cars).then(response => response.data),
    create: (car) => axiosInstance.post(urls.cars, car).then(response => response.data),
    updateById: (id, car) => axiosInstance.patch(`${urls.cars}/${id}`, car).then(response => response.data),
    deleteById: (id) => axiosInstance.delete(`${urls.cars}/${id}`)
}

export {carsCervices}