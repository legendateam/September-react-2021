import axios from "axios";

import {baseURL, jsonPlaceHolder} from "../configs";

const axiosInstance = axios.create({baseURL});
const axiosJsonPlaceHolder = axios.create({baseURL: jsonPlaceHolder});

export default axiosInstance;
export {axiosJsonPlaceHolder}