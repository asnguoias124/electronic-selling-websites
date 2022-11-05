
import './App.css';
import Admin from './admin/Admin';
import SignIn from './signin-signup/signin/login';
import {Routes, Route} from 'react-router-dom';
import SignUp from './signin-signup/signup/signUp';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './components/home/HomePage';
// import SignInApi from './API/SignInApi';

function App() {

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} /> 
        <Route path = "/admin" element={<Admin />}/>
      </Routes>

    </div>
  );
}

export default App;
