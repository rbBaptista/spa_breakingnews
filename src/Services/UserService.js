import axios from "axios";

const baseURL = "http://localhost:3001";

function createUser(user) {
  return axios.post(`${baseURL}/user`, user);
}

function signIn(user) {
  return axios.post(`${baseURL}/auth/login`, user);
}

export { createUser, signIn };
