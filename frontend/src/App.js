
import './App.css';
import Admin from './admin/Admin';
import SignIn from './signin-signup/signin/login';
import {Routes, Route} from 'react-router-dom';
import SignUp from './signin-signup/signup/signUp';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { useEffect } from 'react';
import NavBar from './components/NavBar';
import HomePage from './pages/home/HomePage';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {theme} from './utils/theme';
import {CssBaseline} from '@mui/material';


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} /> 
          <Route path = "/admin" element={<Admin />}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
