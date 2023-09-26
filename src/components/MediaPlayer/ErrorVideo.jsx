import { Link } from "react-router-dom";
import styled from "styled-components";

function ErorrVideo() {
  return (
    <Container>
      <Title>
        error en la carga del video
        <span>
          Intenta recargando la página, si el error persiste, por favor contacta
          a este mail:
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
    row-gap: 3em;
    background-color: #fff;
    width: 80vw;
    height: calc((9 / 16) * 80vw);

    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
      row-gap: 0.3em;
    }

    @media (max-width: 576px) {
      width: 100vw;
      height: calc((12 / 16) * 100vw);
    }
  `,
  Title = styled.p`
    display: flex;
    padding: 0 2em;
    text-transform: uppercase;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
    text-align: center;
    color: #ff0000;
    font-family: "Poppins", sans-serif;
    font-size: calc(30px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
      color: #000000;
      font-family: "Poppins", sans-serif;
      font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      font-style: normal;
      font-weight: 300;
      line-height: normal;
      text-transform: lowercase;
    }

    @media (max-width: 992px) {
      padding: 0;
      row-gap: 0;
    }
  `,
  ReloadBtn = styled(Link)`
    display: flex;
    width: 30vw;
    min-width: 200px;
    margin-top: 0.8em;
    justify-content: center;
    align-items: center;
    color: #ff6700;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: calc(15px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    transition-duration: 0.2s;

    &:hover {
      transform: scale(0.955);
      cursor: pointer;
    }
  `;
