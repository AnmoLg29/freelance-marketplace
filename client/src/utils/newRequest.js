import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelance-marketplace-wcl0.onrender.com/api",
  withCredentials: true,
});

export default newRequest;