import axios from 'axios'

import config from '../../config';
/**
 * Create an Axios Client with defaults
 */
const api = axios.create({
    baseURL: config.api,
    headers: {
        'Accept': 'application/json',
    }
});



export default api;
