import axios from "axios";
// import { UserApi } from "../service/userService";
const HttpClient = axios.create({
  baseURL: "https://614604dd38339400175fc7c4.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});
//send token to server

// HttpClient.interceptors.request.use(function (config) {
//   var {data} = UserApi.isAuthenticated()
//   if (data) {
//     config.headers.Authorization = "Bearer " + data.token;
//   }
//   return config;
// });
export default HttpClient;