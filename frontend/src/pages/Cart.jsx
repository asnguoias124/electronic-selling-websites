
import { useSelector } from 'react-redux';
import styled from "styled-components";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { mobile } from "../responsive";
import axios from 'axios';
import { Link, useNavigate } from "react-router-dom";
import { clearCart, loginUser, removeProductOfCart } from '../redux/apiRequest';
import { useDispatch } from 'react-redux';
import { dispatch } from 'react';
import { clearProduct, removeProduct } from '../redux/cartRedux';
const KEY = process.env.REACT_APP_STRIPE;


const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === "filled" && "none"};
  background-color: ${(props) =>
    props.type === "filled" ? "black" : "transparent"};
  color: ${(props) => props.type === "filled" && "white"};
`;

const TopTexts = styled.div`
  ${mobile({ display: "none" })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}

`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const Image = styled.img`
  width: 200px;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  ${mobile({ margin: "5px 15px" })}
`;

const ProductPrice = styled.div`
  font-size: 30px;
  font-weight: 200;
  ${mobile({ marginBottom: "20px" })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === "total" && "500"};
  font-size: ${(props) => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
cursor: pointer;
  border-radius: 5px;
`;

const Cart = () => {
  
  const user = useSelector((state) => state.auth.login.currentUser);
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cart);
  // const [stripeToken, setStripeToken] = useState(null);
  const history = useNavigate();

  // const onToken = (token) => {
  //   setStripeToken(token);
  // };

  // useEffect(() => {
  //   const makeRequest = async () => {
  //     try {
  //       const res = await userRequest.post("/checkout/payment", {
  //         tokenId: stripeToken.id,
  //         amount: 500,
  //       });
  //       history("/success", {
  //         stripeData: res.data,
  //         products: cart, });
  //     } catch {}
  //   };
  //   stripeToken && makeRequest();
  // }, [stripeToken, cart.total, history]);
  const handlePayment = () => {
    console.log(cart.total);
    axios.post('http://localhost:8000/pay', {
      total: cart.total
    },)
    .then((response) => {
      handleClear()
      // change page to 
      window.location.replace(response.data);
    })
  }

  const handleClear = () => {
    dispatch(clearProduct(cart.products))
  };

  const handleDelete = () => {
    //delete product


    dispatch(removeProduct(cart.products))
    // dispatch(removeProductOfCart(cart.products))
    // dispatch(removeProductOfCart(cart.products, dispatch()))

    // removeProductOfCart(cart.products, dispatch())

  };

  let totalPrice = 0;

  return (
    <Container>
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top>
          <TopButton><Link to = '/' >CONTINUE SHOPPING</Link></TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Your Wishlist (0)</TopText>
          </TopTexts>

          {/* check user is null */}
          {user ? (
              <TopButton type="filled" onClick={() =>handlePayment()} >CHECKOUT NOW</TopButton>)
            : (
              <Link to = '/login' >
                <TopButton type="filled">LOGIN TO CHECK OUT</TopButton>
              </Link>
            )
          }
        </Top>
        <Bottom>
        <Info>
        {cart.products.map((product,index) => (
          totalPrice += product.price * product.quantity,
          <Product key={index}>
            <ProductDetail>
              <Image src={product.image} />
              <Details>
                <ProductName>
                  <b>Product:</b> {product.name}
                </ProductName>
                <ProductId>
                  <b>ID:</b> {product.id}
                </ProductId>
              </Details>
            </ProductDetail>
            <PriceDetail>
              <ProductAmountContainer>
                <ProductAmount>{product.quantity}</ProductAmount>
              </ProductAmountContainer>
              <ProductPrice>
                $ {product.price * product.quantity}
              </ProductPrice>
            </PriceDetail>
            <PriceDetail>
              <Button onClick={handleDelete} style={{    width: 70, height: 36}}>Delete</Button>
            </PriceDetail>
          </Product>
        ))}
        <Button onClick={handleClear} style={{ width: 200,float: "right",marginTop: 20,marginRight:10}}>Clear</Button>
        <Hr />
        </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>$ 5.90</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>$ {totalPrice + 5.9}</SummaryItemPrice>
            </SummaryItem>
            {/* <StripeCheckout
              name="NHAT  Shop"
              image="https://avatars.githubusercontent.com/u/1486366?v=4"
              billingAddress
              shippingAddress
              description={`Your total is $${cart.total}`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
          </StripeCheckout> */}
          {user ? (
              <Button onClick={() =>handlePayment()} >CHECKOUT NOW</Button>)
            : (
              <Link to = '/login' >
                <Button >LOGIN TO CHECK OUT</Button>
              </Link>
            )
          }
          </Summary>
        </Bottom>
      </Wrapper>
    </Container>
  );
};

export default Cart;
