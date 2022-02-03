import axiosInstance from "./axiosServices";
import {urls} from "../configs";

const postsCervices = {
    getALL: async ()=> await axiosInstance.get(urls.posts),
    getOneById: async (id)=> await axiosInstance.get(`${urls.posts}/${id}`)
}
export {postsCervices}