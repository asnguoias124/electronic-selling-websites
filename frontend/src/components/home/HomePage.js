import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";



export default function HomePage(){
    const user = useSelector(state => state.auth.login.currentUser);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(!user) {
            navigate('/login');
        }
    }, [user, dispatch, navigate]);
    return (
        <div className="HomePage">
            <h1>HomePage</h1>
        </div>
    );
    
}