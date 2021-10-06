import axios from 'axios';

const api = axios.create({
  baseURL: 'http://www.mocky.io/v2/',
  timeout: 1000,
});

export default api;
