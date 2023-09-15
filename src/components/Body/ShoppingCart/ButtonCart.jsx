import { Link } from "react-router-dom";
import { useBuyPetition } from "../../../hooks/useBuyLogic.js";
import styled from "styled-components";

function ButtonCart({courses}){
    const {buyUrl} = useBuyPetition({courses})
    const url = buyUrl
    return(
    <Container>
    <Btn to={url}>Buy Now!</Btn>
    </Container>
  );
}

export default ButtonCart;

const Container = styled.article`
    width: 10vw;
    height: 7vh;
    text-align: center;

    @media (min-width: 1224px) {
      width: 100%;
    }
  `,
  Btn = styled(Link)`
    display: flex;
    justify-content: center;
    text-decoration: none;
    margin: auto 0;
    font-family: "Poppins", monospace;
    color: #ff6700;
    outline: 2px solid #ff6700;
    font-weight: 700;
    border-radius: 8px;
    width: 22vw;
    height: 6vh;
    line-height: 6vh;
    padding: 0 2vw;
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
  `;
