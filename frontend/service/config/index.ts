import axios, { AxiosInstance } from "axios";
import { errorInterceptor, responseInterceptor } from "./interceptors";

const api: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
})

api.interceptors.response.use(
  (response) => responseInterceptor(response),
  (error) => errorInterceptor(error)
)

export default api;
