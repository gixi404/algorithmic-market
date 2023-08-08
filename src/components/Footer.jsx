import { Link } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <p>Hecho por Vaito and giXi</p>
      <Link to="/privacy">Política de Privacidad</Link>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #fff;
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  justify-content: center;
`;
