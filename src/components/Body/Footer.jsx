import { Link as Linkk } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <Link to="/privacy">Privacy Policy</Link>
      <StaffLym>Created by Staff Lym</StaffLym>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #2b2d42;
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  row-gap: 5px;
  justify-content: space-around;
`;

const Link = styled(Linkk)`
  color: #b2b9ff;
  text-decoration: none;
  font-size: 1rem;
`;

const StaffLym = styled.p`
  color: #b2b9ff;
  font-size: 1rem;
`;
