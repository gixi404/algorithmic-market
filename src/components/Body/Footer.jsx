import { Link as Linkk } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  const urlWhatsApp =
    "https://wa.me/2615731250?text=Hola Staff Lym, los contacto por...";

  return (
    <Container>
      <Content>
        <a href={urlWhatsApp} rel="noopener noreferrer" target="_blank">
          Creado por Staff Lym
        </a>
        <Link to="/privacy">Política de Privacidad</Link>
        <p>&copy; Todos los derechos reservados</p>
      </Content>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
    background-color: #1e1e1e;
    width: 100vw;
    height: 15vh;
    max-height: 100px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
    border-top: 4px solid #ff6700;
  `,
  Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 0.6em;
    justify-content: center;
    font-family: "Poppins", monospace;
    @media (min-width: 1024px) {
      width: 80vw;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    @media (max-width: 480px) {
      align-items: center;
    }
    p {
      color: #fff;
      font-weight: 300;
      letter-spacing: 0.3px;
      font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    }
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 300;
      letter-spacing: 0.3px;
      font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      transition-duration: 0.1s;
      &:hover {
        color: #797979;
      }
    }
  `,
  Link = styled(Linkk)`
    color: #fff;
    font-size: 1em;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 0.3px;
  `;
