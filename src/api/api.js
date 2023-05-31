import axios from "axios";

const API = 'http://localhost:80/api/';

const api = axios.create({
    baseURL: API, withCredentials: true
});

api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('accessToken')}`;
    return config;
});

export default api