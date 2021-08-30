import axios from "axios";
const axiosInstance = axios.create({
  baseURL: "https://shop3tclothing-server.herokuapp.com/",
});
axiosInstance.interceptors.request.use(
  (config) => new Promise((resolve) => setTimeout(() => resolve(config), 0))
);
export default axiosInstance;
