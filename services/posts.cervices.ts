import axiosInstance from "./axios.cervices";

import {urls} from "../configs/urls";
import {AxiosResponse} from "axios";
import {IPosts} from "../interfaces/posts.interfaces";

export const postsCervices = {
    getAll: ():Promise<AxiosResponse<IPosts[]>> => axiosInstance.get(urls.posts),
    getOne: (id:number):Promise<AxiosResponse<IPosts>> => axiosInstance.get(`${urls.posts}/${id}`)
}

export const postsCervicesHaveData = {
    getAll: ():Promise<IPosts[]> => axiosInstance.get(urls.posts).then(response => response.data),
    getOne: (id:number):Promise<IPosts> => axiosInstance.get(`${urls.posts}/${id}`).then(response => response.data)
}

export const postsCervicesAsyncAwait = {
    getALL: async ():Promise<AxiosResponse<IPosts[]>> => await axiosInstance.get(urls.posts),
    getOne: async (id:number):Promise<AxiosResponse<IPosts>> => await axiosInstance.get(`${urls.posts}/${id}`)
}

export const postsCervicesAsyncAwaitHaveData = {
    getALL: async ():Promise<IPosts[]> => {
        const response = await axiosInstance.get(urls.posts);
        return response.data
    },
    getOne: async (id:number):Promise<IPosts> => {
        const response = await axiosInstance.get(`${urls.posts}/${id}`);
        return response.data
    }
}