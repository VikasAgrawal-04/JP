import axios from "axios";
const baseURL = "https://food-panda.onrender.com/api";

export const apiInstance = axios.create({
  baseURL: baseURL,
});
