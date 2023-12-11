import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_PATH } from "../../utils/consts.js";
import styled from "styled-components";

function CoursePurchased() {
  const { user } = useAuth0();

  async function sendMail() {
    await fetch(`${BACK_PATH}/coursepurchased`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer yourAccessToken",
      },
      body: JSON.stringify({
        name: user?.nickname,
        email: user?.email,
      }),
    });
  }

  return (
    <Container to="/" onClick={sendMail}>
      <Letter>
        <Title>
          <span>Compra realizada correctamente</span>
          En la sección Cursos verás que ahora hay un botón "Ver", en él podrás
          acceder al contenido del curso.
        </Title>
        <OkeyBtn>Okey</OkeyBtn>
      </Letter>
    </Container>
  );
}

export default CoursePurchased;

const Container = styled(Link)`
    min-height: 100vh;
    width: 100vw;
    position: fixed;
    background-color: transparent;
    backdrop-filter: blur(5px);
    z-index: 200;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    text-decoration: none;
    cursor: default;
    color: inherit;
  `,
  Letter = styled.section`
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;
    background-color: #fff;
    width: 80vw;
    height: calc((9 / 16) * 80vw);
    @media (max-width: 576px) {
      border-radius: 0;
      width: 100vw;
      min-height: 100vh;
    }
  `,
  Title = styled.p`
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    text-align: center;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
      color: #ff6700;
      font-family: "Poppins", sans-serif;
      font-size: calc(32px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  `,
  OkeyBtn = styled.button`
    display: flex;
    width: 30vw;
    padding: 10px 18px;
    border-radius: 12px;
    border: 2px solid #ff6700;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #ff6700;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

    transition-duration: 0.2s;

    &:hover {
      transform: scale(0.9);
      cursor: pointer;
      background-color: #ff6700;
      color: #fff;
    }
  `;
