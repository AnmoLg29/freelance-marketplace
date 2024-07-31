import axios from "axios";

const newRequest = axios.create({
  baseURL: "https://freelance-backend-nksz.onrender.com/api/",
  withCredentials: true,
});

export default newRequest;