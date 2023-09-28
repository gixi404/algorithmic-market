import { Link } from "react-router-dom";
import { useBuyPetition } from "../../../hooks/useBuyLogic.js";
import styled from "styled-components";

function ButtonCart(props) {
  const { courses } = props,
    { buyUrl } = useBuyPetition({ courses });

  return (
    <Container>
      <Btn to={buyUrl}>Comprar</Btn>
    </Container>
  );
}

export default ButtonCart;

const Container = styled.div`
    min-width: 200px;
    width: 20vw;
    height: 6vh;
    max-height: 55px;
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Btn = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-family: "Poppins", monospace;
    color: #ff6700;
    outline: 2px solid #ff6700;
    font-weight: 700;
    border-radius: 8px;
    width: 100%;
    height: 100%;
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
