import axios from "axios";

import baseURL from "../config/urls";

const axiosInstance = axios.create({baseURL});

export default axiosInstance