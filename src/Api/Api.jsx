import axios from "axios";

const API = axios.create({
    baseURL: "https://ocs-medicareconnect-backend.onrender.com/api",
});

export default API;