import axios from "axios";

const BASE_URL = "https://restcountries.com/v3.1/";

export const myAxios = axios.create({
  baseURL: BASE_URL,
});
