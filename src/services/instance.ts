// Axios
import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: process.env.EXPO_PUBLIC_API_URL || "https://api.le-systeme-solaire.net/rest",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
});