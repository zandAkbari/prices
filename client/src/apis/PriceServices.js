import axios from 'axios';

export const getPrices = () => {
    return axios.get('http://localhost:3333/prices');
};
