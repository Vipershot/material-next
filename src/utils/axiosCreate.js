import axios from "axios";
export const requests = axios.create({
  baseURL: 'https://fakestoreapi.com',
});

requests.defaults.headers.common["Content-Type"] = "multipart/form-data";
