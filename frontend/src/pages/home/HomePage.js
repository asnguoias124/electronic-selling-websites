import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Box from '@mui/material/Box';
import jwt_decode from 'jwt-decode';
import axios from "axios";

import BannersComponent from "../../components/Banners";




export default function HomePage(){
    const user = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    }, [user, dispatch, navigate]);
    let axiosJwt = axios.create();
    const refeshToken = async () => {
        try{

            const res = await axiosJwt.post('http://localhost:8000/v1/auth/refresh', {
                withCredentials: true,
            })
            return res.data;
        }
        catch(err){
            console.log(err);
        }

};
    axiosJwt.interceptors.request.use(
        async (config) => {
    
            const decCodedToken = jwt_decode(user?.accessToken);
            if(decCodedToken.exp * 1000 < new Date().getTime()) {
                try {
                    const data = await refeshToken();
                    const refreshUser = {
                        ...user,
                        accessToken: data.accessToken,
                        // refreshToken: data.refreshToken  
                    }
                    dispatch({type: 'LOGIN_SUCCESS', payload: refreshUser});
                    config.headers['token'] = `Bearer ${data.accessToken}`;
                }
                catch(err) {
                    console.log(err);
                }

            }    
        }
    )
    return (
        <Box>
            <BannersComponent/>
        </Box>
    )
    
}