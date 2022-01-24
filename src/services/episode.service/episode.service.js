import axiosInstance from "../axios.service/axios.service";

import {urls} from "../../configs/urls";

export const episodeService = {
    getAll: ()=> axiosInstance(urls.episode).then(response => response.data),
    getAllPage: (page) => axiosInstance(`${urls.episode}${urls.page}${page}`).then(response => response.data),
    getOne: (id)=> axiosInstance(`${urls.episode}/${id}`).then(response => response.data)
}