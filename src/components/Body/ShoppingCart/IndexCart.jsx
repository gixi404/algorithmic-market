import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ContextProps } from "../../Context";
import ItemCart from "./ItemCart.jsx";
import { CloseCartSVG } from "../../svgs";
import Header from "../Header/Header";
import Footer from "../Footer";
import styled from "styled-components";

function IndexCart() {
  const { loginWithPopup } = useAuth0(),
    { coursesCart } = useContext(ContextProps),
    [value, setValue] = useState(0);

  useEffect(() => recuderCash(), [coursesCart]);

  function recuderCash() {
    const price = coursesCart.reduce((ac, cv) => ac + cv.cash, 0);
    if (coursesCart.length < 0) {
      return "0";
    }
    setValue(price);
  }

  return (
    <Container>
      <Header />

      <CartContainer>
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
            <P title="No hay cursos">Sin cursos</P>
          )}
        </ItemContainer>

        <FooterCart>
          <Article>
            <p>Monto total</p>
            <strong>${value} USD</strong>
          </Article>
        </FooterCart>

        <SubmitContainer>
          <SubmitBtn onClick={loginWithPopup}>¡Comprar Ahora!</SubmitBtn>
        </SubmitContainer>
      </CartContainer>

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
  CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 500px;
    border-radius: 8px;
    background-color: #fff;
    margin: 3em 0;
    height: 70vh;
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
    /* a {
      font-family: "Poppins", monospace;
      width: 5vw;
      background-color: transparent;
      color: #2e2e2e;
      width: max-content;
      padding: 0;
      cursor: pointer;
      transition: all 0.5s ease;
      margin-top: 1vh;
    }
    p {
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
        color: #222;
        padding: 0 2vw;
        background-color: #ff6700;
      } 
    }*/
  `,
  ItemContainer = styled.main`
    height: 60vh;
    width: 90%;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    align-items: center;
  `,
  P = styled.p`
    font-family: "Poppins", monospace;
    font-weight: 500;
    cursor: pointer;
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
  SubmitContainer = styled.article`
    width: 75%;
    height: 10vh;
    text-align: center;
  `,
  SubmitBtn = styled.button`
    margin: auto 0;
    font-family: "Poppins", monospace;
    font-weight: 500;
    color: #ff6700;
    outline: 2px solid #ff6700;
    font-weight: 700;
    border-radius: 8px;
    width: 70%;
    height: 5vh;
    padding: 0 2vw;
    text-align: center;
    border: 0;
    background-color: transparent;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

    &:hover {
      cursor: pointer;
      color: #fff;
      scale: 1.1;
      box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
      outline: none;
      border: none;
      background-color: #ff6700;
    }
  `;
