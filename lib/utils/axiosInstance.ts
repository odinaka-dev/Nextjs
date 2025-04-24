import { baseURL } from "@/app/(websites)/config";
import axios from "axios";

const axiosInstance = axios.create({
  baseURL,
});

export default axiosInstance;
