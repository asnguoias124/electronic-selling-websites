import axiosClient from "./axiosClient";

const signInApi = {
    signIn: (data) => {
        const url = "/auth/login";
        return axiosClient.post(url, data);
    },
    signUp: (data) => {
        const url = "/auth/register";
        return axiosClient.post(url, data);
    },
}

export default signInApi;