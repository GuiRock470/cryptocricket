import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${
    import.meta.env.VITE_ENVIROMENT === "development" ? "http" : "https"
  }://${import.meta.env.VITE_PUBLIC_API_URL}/api`,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": "true",
  },
});

export default axiosInstance;
