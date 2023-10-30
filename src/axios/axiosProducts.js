import { BASE_URL } from '../utils/constants';
import axios from 'axios';

export const getProducts = async () => {
    try {
        const response = await axios.get(`${BASE_URL}products`)

        return response.data
    } catch (error) {
        console.log(error)
    }
}