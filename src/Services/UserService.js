import axios from "axios";
import Cookies from "js-cookie";

const baseURL = "http://localhost:3001";

function createUser(user) {
  return axios.post(`${baseURL}/user`, user);
}

function signIn(user) {
  return axios.post(`${baseURL}/auth/login`, user);
}

function getByUserId() {
  return axios.get(`${baseURL}/user`, {
    headers: {
      Authorization: `bearer ${Cookies.get("token")}`,
    },
  });
}

export { createUser, signIn, getByUserId };
