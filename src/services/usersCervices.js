import axiosInstance from "./axiosServices";
import {urls} from "../configs";

const usersCervices = {
    getAll: async () => await axiosInstance.get(urls.users),
    getOneById: async (id) => await axiosInstance.get(`${urls.cars}/${id}`)
}
export {usersCervices}