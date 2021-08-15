import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "http://localhost:5000",
});
axiosInstance.interceptors.request.use(
  (config) => new Promise((resolve) => setTimeout(() => resolve(config), 10000))
);
export default axiosInstance;
