import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function MobileLoginBtn() {
  const { loginWithPopup } = useAuth0();
  return (
    <Container>
      <Btn onClick={loginWithPopup}>Iniciar Sesión</Btn>
    </Container>
  );
}

export default MobileLoginBtn;

const Container = styled.div`
    width: 100vw;
    height: 8vh;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 577px) {
      display: none;
    }
  `,
  Btn = styled.button`
    position: relative;
    font-family: "Poppins", monospace;
    padding: 8px 15px;
    text-align: center;
    font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #ff6700;
    outline: 2px solid #ff6700;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    border: none;

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
