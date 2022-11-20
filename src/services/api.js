import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-iall.azurewebsites.net",
});

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1NjlkYzAzOS1lNGUwLTQwMTUtOTczNy05OWFlY2U4N2E2ODYiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW8xMkB0ZXN0ZS5jb20iLCJzdWIiOiIxMSIsImVtYWlsIjoidXN1YXJpbzEyQHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiSVpLU1lOQzNVTjRHQllaUlRKNEFDN1NTTzNLVkJBQTIiLCJleHAiOjE2Njg5NzAyMDh9.CDVqFwu751rr4J1i_yMHOZvysB9O4v63TG_s5gHm1nE";
api.defaults.headers.common = {'Authorization': `Bearer ${token}`}

// api.interceptors.request.use(async config => {

//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default api;