
import './App.css';
import Admin from './admin/Admin';
import SignIn from './signin-signup/signin/login';
import {Routes, Route} from 'react-router-dom';
import SignUp from './signin-signup/signup/signUp';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {theme} from './utils/theme';
import {CssBaseline} from '@mui/material';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Product from "./pages/Product";


function App() {

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products/:cat' element={<ProductList />} />
          <Route path='/product/:id' element={<Product />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/register" element={<SignUp />} /> 
          <Route path = "/admin" element={<Admin />}/>
        </Routes>
      </ThemeProvider>
    </div>
  );
}

export default App;
