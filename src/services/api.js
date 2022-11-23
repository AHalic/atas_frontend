import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-iall.azurewebsites.net",
});

const token = "your token";
api.defaults.headers.common = {'Authorization': `Bearer ${token}`}



export default api;