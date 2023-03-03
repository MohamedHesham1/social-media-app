import axios from "axios";

export const makeRequest = axios.create({
  baseURL: "https://social-media-backend-z94r.onrender.com/api",
  withCredentials: true,
});
