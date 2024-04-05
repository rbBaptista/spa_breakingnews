import axios from "axios";
import { baseURL } from "./HTTPService";

export function getNews() {
  return axios.get(`${baseURL}/news`);
}

export function getNewsByTitle(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}
