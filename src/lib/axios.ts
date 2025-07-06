import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://deluxefarm-us.backendless.app"
})



// axiosInstance.get("/api/users/register")