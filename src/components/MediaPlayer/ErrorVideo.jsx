import { Link } from "react-router-dom";
import styled from "styled-components";

function ErorrVideo() {
  return (
    <Container>
      <Title>
        hubo un error en la carga del video
        <span>
          Intenta recargando la página y si el error persiste, por favor
          contacta a este mail:
          <br />
          <code style={{ userSelect: "text", fontWeight: "bold" }}>
            gioliotta.io@gmail.com
          </code>
        </span>
      </Title>

      <ReloadBtn onClick={() => location.reload()}>Recargar Página</ReloadBtn>
    </Container>
  );
}

export default ErorrVideo;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;
    background-color: #fff;
    width: 80vw;
    height: calc((9 / 16) * 80vw);

    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
    }

    @media (max-width: 576px) {
      width: 100vw;
      height: calc((9 / 16) * 100vw);
    }
  `,
  Title = styled.p`
    display: flex;
    padding: 0 2rem;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    text-align: center;
    color: #ff0000;
    font-family: "Poppins", sans-serif;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
      color: #000000;
      font-family: "Poppins", sans-serif;
      font-size: 1.3rem;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      text-transform: lowercase;
    }
  `,
  ReloadBtn = styled.button`
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
    font-size: 1.3rem;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(0.955);
      cursor: pointer;
    }
  `;
