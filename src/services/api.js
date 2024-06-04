import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-iall.azurewebsites.net",
});

const token = process.env.REACT_APP_API_KEY;
console.log(token);
api.defaults.headers.common = {'Authorization': `Bearer ${token}`}



export default api;