import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { mobile } from '../responsive';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: contents;
  ${mobile({ height: '50px' })}
`;

const Wrapper = styled.div`
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 10;
  background-color: #fff;
  right: 0;
  left: 0;
  ${mobile({ padding: '10px 0px' })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
  border-radius: 15px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: '50px' })}

  &:focus-visible {
    outline: none;
  }
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
  justify-content: center;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: '24px' })}
  & a {
    text-decoration: none;
    color: #000;
  }
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: 'center' })}
`;

const MenuItem = styled.div`
  font-size: 18px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: '12px', marginLeft: '10px' })}

  & a {
    text-decoration: none;
    color: #000;
  }

  &:hover a {
    color: red;
  }
`;

const Navbar = () => {
  const quantity = useSelector((state) => state.cart.quantity);
  const [searchInput, setSearchInput] = useState('');

  return (
    <Container>
      <Wrapper>
        <Left>
          <Logo><Link to='/'>LAMAHA</Link></Logo>
        </Left>
        <Center>
          <MenuItem>
            <Link to='/'>Home</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/products'>Products</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/about'>About</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/contact'>Contact</Link>
          </MenuItem>
        </Center>
        <Right>
          <SearchContainer>
            <Input
              placeholder='Search'
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <Link to={`/products?search=${searchInput}`} style={{background:'none', border: 'none', display:'flex'}}>
              <SearchIcon style={{ color: 'gray', fontSize: 16 }} />
            </Link>
          </SearchContainer>
          <MenuItem>
            <Link to='/login'>Login</Link>
          </MenuItem>
          <MenuItem>
            <Link to='/cart'>
              <Badge badgeContent={quantity} color='primary'>
                <ShoppingCartIcon />
              </Badge>
            </Link>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
