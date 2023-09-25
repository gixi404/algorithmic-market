import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  const urlWhatsApp =
    "https://wa.me/2615731250?text=Hola, me gustaría adquirir sus servicios";

  return (
    <FooterContainer>
      <TextContainer>
        <Text to={urlWhatsApp} target="_blank">
          Creado por Staff Lym
        </Text>
        <Text to="/privacy">Política de Privacidad</Text>
        <Text style={{ cursor: "default" }}>
          &copy; Todos los derechos reservados
        </Text>
      </TextContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
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
  TextContainer = styled.div`
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
  `,
  Text = styled(Link)`
    color: #fff;
    font-size: 1em;
    text-decoration: none;
    font-weight: 300;
    letter-spacing: 0.3px;
  `;
