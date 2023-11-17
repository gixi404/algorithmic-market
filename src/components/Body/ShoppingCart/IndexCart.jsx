import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useMyContext } from "../../Context";
import ItemCart from "./ItemCart.jsx";
import Header from "../Header/Header";
import Footer from "../Footer";
import Btn from "./ButtonCart.jsx";
import { CloseCartSVG } from "../../svgs";
import styled from "styled-components";
import LoginBtn from "../../Log/LoginBtn";

function IndexCart() {
  const { isAuthenticated } = useAuth0(),
    { coursesCart, setCoursesCart } = useMyContext(),
    [value, setValue] = useState(0);
  useEffect(() => {
    const carritostr = window.localStorage.getItem("cursoscarrito");
    const carrito = JSON.parse(carritostr);
    if (carrito) {
      setCoursesCart(carrito);
    }
  }, []);
  useEffect(() => {
    if (coursesCart.length > 0) {
      window.localStorage.setItem("cursoscarrito", JSON.stringify(coursesCart));
    }
    if (coursesCart.length === 0) {
      window.localStorage.removeItem("cursoscarrito");
    }
  }, [coursesCart]);
  useEffect(() => reducerCash(), [coursesCart]);

  function reducerCash() {
    const price = coursesCart.reduce((ac, cv) => ac + cv.cash, 0);
    if (coursesCart.length < 0) {
      return "0";
    }
    setValue(price);
  }

  return (
    <Container>
      <Header />

      <Content>
        <HeaderCart>
          <h3 style={{ color: "black" }}>Carrito</h3>
          <Link to="/">
            <CloseCartSVG />
          </Link>
        </HeaderCart>

        <ItemContainer>
          {coursesCart.length > 0 ? (
            coursesCart.map(course => (
              <ItemCart key={course.id} data={course} />
            ))
          ) : (
            <P style={{ marginTop: "3em" }}>Carrito Vacío</P>
          )}
        </ItemContainer>

        <FooterCart>
          <Article>
            <p>Monto total</p>
            <strong>${value} USD</strong>
          </Article>
        </FooterCart>

        {isAuthenticated && coursesCart.length > 0 ? (
          <SubmitContainer>
            <Btn courses={coursesCart} />
          </SubmitContainer>
        ) : !isAuthenticated && coursesCart.length > 0 ? (
          <ContLogin>
            <P>Inicia Sesión para realizar una compra</P>
            <LoginBtn />
          </ContLogin>
        ) : null}
      </Content>

      <Footer />
    </Container>
  );
}
export default IndexCart;

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  Content = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    background-color: #fff;
    margin: 3em 0;

    height: auto;
    h1 {
      text-align: center;
    }

    @media (max-width: 480px) {
      width: 100vw;
      border-radius: 0px;
    }
  `,
  HeaderCart = styled.header`
    width: 90%;
    height: 100px;
    border-bottom: 0.5vh solid #ff6700;
    display: flex;
    align-items: center;
    justify-content: space-between;
    h3 {
      text-align: start;
      font-family: "Poppins", monospace;
      font-size: calc(26px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      color: #ff6700;
    }
  `,
  ItemContainer = styled.div`
    min-height: 40vh;
    height: auto;
    width: 90%;
    /* overflow-x: hidden; */
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  P = styled.p`
    font-family: "Poppins", monospace;
    font-weight: 500;
  `,
  FooterCart = styled.footer`
    width: 90%;
    margin-top: 2vw;
    height: 100px;
    border-top: 0.5vh solid #ff6700;
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  Article = styled.article`
    height: 5vh;
    width: 100%;
    align-items: center;
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Poppins", monospace;
    }
  `,
  SubmitContainer = styled.section`
    width: 100%;
    height: 10vh;

    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  ContLogin = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1.5em;
    margin-bottom: 1em;
  `;
