import {axiosInstance} from "./axios.cervices";

import {urls} from "../configs/urls";

export const usersServices = {
    getAll: () => axiosInstance.get(urls.users).then(response => response.data),
    getOne: (id) => axiosInstance.get(`${urls.users}/${id}`).then(value => value.data),
    getPosts: (id) => axiosInstance.get(`${urls.users}/${id}${urls.posts}`).then(response => response.data),
    getAlbums: (id) => axiosInstance.get(`${urls.users}/${id}${urls.albums}`).then(response => response.data)
}
