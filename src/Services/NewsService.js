import axios from "axios";

const baseURL = "http://localhost:3001";

export function getNews() {
  return axios.get(`${baseURL}/news`);
}
