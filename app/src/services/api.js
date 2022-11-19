import axios from "axios";

const api = axios.create({
  baseURL: "https://desafio-iall.azurewebsites.net",
});

const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIwMTAxMTZlMy1jMDgwLTQzOGMtOTIwMi00MGE2NjllNDFiZGUiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW8xMkB0ZXN0ZS5jb20iLCJzdWIiOiIxMSIsImVtYWlsIjoidXN1YXJpbzEyQHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiSVpLU1lOQzNVTjRHQllaUlRKNEFDN1NTTzNLVkJBQTIiLCJleHAiOjE2Njg4Njg4MTN9.roxLumlhPSt20ASjD3q-EwVIRJIO6hO1XPhynLQq-yk";
api.defaults.headers.common = {'Authorization': `Bearer ${token}`}

// api.interceptors.request.use(async config => {

//   if (token) {
//     api.defaults.headers.authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default api;