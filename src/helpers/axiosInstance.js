import axios from 'axios';
import {  coin_gecko_url } from './constants';

const axiosInstance = axios.create({
    baseURL: coin_gecko_url
})

export default axiosInstance;