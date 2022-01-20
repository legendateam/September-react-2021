const axios = require("axios");

const {baseURL} = require("../configs/urls");

const axiosInstance = axios.create({baseURL});

export {axiosInstance}