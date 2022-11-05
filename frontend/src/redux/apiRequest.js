import axios from "axios";
import {
    loginFailed,
    loginStart,
    loginSuccess,
  } from "./authSlice"


export const loginUser = async (user, dispatch, navigate) => {

    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/v1/auth/login", user);
        dispatch(loginSuccess(res.data));
        navigate("/admin/"+"#"+"/category");
    } catch (err) {
        dispatch(loginFailed());
    }
}
export const registerUser = async (user, dispatch, navigate) => {
    dispatch(loginStart());
    try {
        const res = await axios.post("http://localhost:8000/v1/auth/register", user);
        dispatch(loginSuccess(res.data));
        navigate("/login");
    } catch (err) {
        dispatch(loginFailed());
    }
}