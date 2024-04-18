import axios from "axios";
import { baseURL } from "./HTTPService";
import Cookies from "js-cookie";

export function getNews() {
  return axios.get(`${baseURL}/news`);
}

export function getNewsByTitle(title) {
  const response = axios.get(`${baseURL}/news/search?title=${title}`);
  return response;
}

export function getNewsByUserId() {
  return axios.get(`${baseURL}/news/my-news`, {
    headers: {
      Authorization: `bearer ${Cookies.get("token")}`,
    },
  });
}
