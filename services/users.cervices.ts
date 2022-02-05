import {IUsers} from '../interfaces/users.interfaces'
import axiosInstance from "./axios.cervices";
import {urls} from "../configs/urls";
import {AxiosResponse} from "axios";

export const getAllUsersCervices = ():Promise<IUsers[]> => axiosInstance.get(urls.users).then(response=> response.data)

export const getAllUsersCervicesAxiosResponse = ():Promise<AxiosResponse<IUsers[]>> => axiosInstance.get(urls.users)

export const getAllUsersAsyncCervices = async (): Promise<IUsers[]> => {
    const response = await axiosInstance.get(urls.users);
    return response.data
}

export const getAllUsersAsyncCervicesNoData = async (): Promise<AxiosResponse<IUsers[]>> => await axiosInstance.get(urls.users);