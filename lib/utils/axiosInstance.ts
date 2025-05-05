import axios from "axios";
import { baseURL } from "@/config/index";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
