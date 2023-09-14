import axios from "axios";
import { API_BASE_URL } from "../constants";
import { LOCAL_STORAGE } from "../services/storage";

export const httpClient = axios.create({ baseURL: API_BASE_URL });
 const token = LOCAL_STORAGE.get("token");
 
httpClient.interceptors.request.use(
  (config) => {
   
    config.headers.Authorization = `Bearer: ${token}`;
    console.log(config);
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
