import { Badge } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: contents;
  ${mobile({ height: "50px" })}
`;

const Wrapper = styled.div`
height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ padding: "10px 0px" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
  ${mobile({ display: "none" })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({ width: "50px" })}
`;

const Center = styled.div`
  flex: 1;
  text-align: center;
  display: flex;
`;

const Logo = styled.h1`
  font-weight: bold;
  ${mobile({ fontSize: "24px" })}
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flex: 2, justifyContent: "center" })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({ fontSize: "12px", marginLeft: "10px" })}

  & a {
    color: #000;
    text-decoration: none;  
  }

  &:hover a{
    color: #ff3d00;
  }
`;

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <Container>
      <Wrapper>
        <Left>
         <Logo>LAMA.</Logo>
        </Left>
        <Center>
          <MenuItem><Link to = '/'>Home</Link></MenuItem>
          <MenuItem><Link to = '/about'>About</Link></MenuItem>
          <MenuItem><Link to = '/contact'>Contact</Link></MenuItem>
        </Center>
        <Right>
          <SearchContainer>
            <Input placeholder="Search" />
            <SearchIcon style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
          <MenuItem><Link to = '/login'>LOGIN</Link></MenuItem>
          <MenuItem>
            <Link to='/cart'>
              <Badge badgeContent={quantity} color="primary">
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
