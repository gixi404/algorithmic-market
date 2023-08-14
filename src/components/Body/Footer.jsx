import { Link as Linkk } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <Link to="/privacy">Política de Privacidad</Link>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #2b2d42;
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 5px;
  justify-content: center;
`;

const Link = styled(Linkk)`
  color: #b2b9ff;
  text-decoration: none;
`;
