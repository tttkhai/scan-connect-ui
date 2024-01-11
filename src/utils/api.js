import axios from "axios"
import Cookies from 'js-cookie';

export const api = () => {
    const instance = axios.create({
        baseURL: process.env.BASE_URL
    });
    const token = Cookies.get('token');

    if (token) {
        instance.defaults.headers = {
            'Content-Type': 'application/json',
            'Authorization': token
        }
    }

    return instance;
}
