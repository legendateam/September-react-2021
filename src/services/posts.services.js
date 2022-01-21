import {urls} from '../configs/urls';
import {axiosInstance} from './axios.cervices';

export const postsServices = {
    getAll: () => axiosInstance.get(urls.posts).then(reposnse => reposnse.data),
    getOne: (id) => axiosInstance.get(`${urls.posts}/${id}`).then(response => response.data),
    getComments: (id) => axiosInstance.get(`${urls.posts}/${id}${urls.comments}`).then(response => response.data)
}