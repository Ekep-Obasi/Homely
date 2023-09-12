import axios from 'axios';
import { API_BASE_URL } from '../constants';


export const httpClient = axios.create({baseURL: API_BASE_URL});

httpClient.interceptors.request.use()