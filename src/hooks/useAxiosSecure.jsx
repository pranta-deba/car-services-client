import axios from "axios";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    withCredentials: true
})

const useAxiosSecure = () => {
    const {logOut} = useContext(AuthContext);

    axiosSecure.interceptors.response.use(res => {
        return res;
    }, error => {
        console.log(error.response);
        if (error.response.status === 401 || error.response.status === 403) {
            logOut();
        }
    })

    return axiosSecure;
};

export default useAxiosSecure;