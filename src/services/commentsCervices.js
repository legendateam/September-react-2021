import axiosInstance from "./axiosServices";
import {urls} from "../configs";

const commentsCervices = {
    getAll: async () => await axiosInstance.get(urls.comments),
    getOneById: async (id) => await axiosInstance.get(`${urls.comments}/${id}`)
}
export {commentsCervices}