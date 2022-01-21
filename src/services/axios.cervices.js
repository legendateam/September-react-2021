import {baseURL} from "../configs/urls";

const axios = require("axios");

const axiosInstance = axios.create({baseURL});

export {axiosInstance}