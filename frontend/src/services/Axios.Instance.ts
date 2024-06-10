import axios from "axios";

const AxiosInstance = axios.create({
  baseURL:
    "https://cdb2-2401-4900-1c44-8ddb-9d1b-a11e-6070-a7ea.ngrok-free.app",
  headers: {
    "ngrok-skip-browser-warning": "skip-browser-warning",
  },
});

AxiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) return response.data;
  },
  (error) => {
    return Promise.reject(error.message);
  }
);

export default AxiosInstance;
