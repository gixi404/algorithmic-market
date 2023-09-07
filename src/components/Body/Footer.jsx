import { Link as Linkk } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <TextContainer>
        <StaffLym>Created by Staff Lym</StaffLym>
        <Link to="/privacy">Privacy Policy</Link>
        <Link to="/privacy">&copy; All rights reserved</Link>
      </TextContainer>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.div`
    background-color: #1e1e1e;
    width: 100vw;
    height: 75px;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-family: "Poppins", monospace;
    justify-content: center;
    row-gap: 5px;
    border-top: 4px solid #ff6700;
    padding: 0.7rem 0;
  `,
  TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    row-gap: 0.6rem;
    justify-content: center;
    font-family: "Poppins", monospace;

    @media (min-width: 1024px) {
      width: 80vw;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
    }
  `,
  Link = styled(Linkk)`
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
  `,
  StaffLym = styled.p`
    color: #ffffff;
    font-size: 1rem;
  `;
