import axios from "axios"

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL
})
axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token")
  if (token) {
    config.headers.common.Authorization = token;
  }
  return config;
}, function (error) {
  return Promise.reject(error);
});
axiosInstance.interceptors.response.use(function (response) {
  return response.data;
}, function (error) {
  return Promise.reject(error);
});

export default axiosInstance
