import axios from "axios";

export const axiosReq = axios.create({
  baseURL: "http://localhost:8080/api/v1",
  headers: {
    "Content-Type": "application/json", // Set default content type
  },
});

//Interceptor to add Authorization for each request
axiosReq.interceptors.request.use((config) => {
  //get token from local storage or cookies
  const token = localStorage.getItem("token");
  if (token) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  return config;
});
