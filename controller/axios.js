import axios from "axios";
let URL;
URL = process.env.URL || "http://localhost:4001";
// URL = "http://localhost:4001";
const instance = axios.create({
  baseURL: URL, // THE API (cloud function) URL
  withCredentials: true,
});

export default instance;
