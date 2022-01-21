import {axiosInstance} from "./axios.cervices";

import {urls} from "../configs/urls";

export const albumsServices = {
    getAll: ()=> axiosInstance.get(urls.albums).then(response => response.data),
    getPhotos: (id) => axiosInstance.get(`${urls.albums}/${id}${urls.photos}`).then(response => response.data)
}