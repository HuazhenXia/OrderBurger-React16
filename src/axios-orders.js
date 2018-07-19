import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://orderburger-aae00.firebaseio.com/'
});

export default instance;
