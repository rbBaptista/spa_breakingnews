import axios from "axios";

const baseURL = "http://localhost:3001";

const HTTPService = axios.create({
  baseURL,
  headers: {
    "Content-type": "application/json",
  },
});

export default HTTPService;
