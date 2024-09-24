import axios from "axios";

console.log('API URL:', process.env.API_URL || 'http://localhost:3001/');

const instance = axios.create({
  baseURL: process.env.API_URL || 'http://localhost:3001/',
  timeout: 1000,
  headers: { "Content-Type": "application/json" },
});

export default instance;
