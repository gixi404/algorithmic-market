import { Link as Linkk } from "react-router-dom";
import { ContextProps } from "../Context";
import { useContext } from "react";
import styled from "styled-components";

function Footer() {
  const { isDesktop } = useContext(ContextProps);

  const FooterContainer = styled.div`
      background-color: #1e1e1e;
      width: 100vw;
      height: 85px;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      row-gap: 5px;
      border-top: 4px solid #ff6700;
      padding: 0.7rem 0;
    `,
    TextContainer = styled.div`
      width: 80vw;
      display: flex;
      flex-direction: ${isDesktop("row", "column")};
      align-items: ${isDesktop("end", "center")};
      text-align: start;
      row-gap: ${isDesktop("2rem", "0.5rem")};
      justify-content: ${isDesktop("space-around", "center")};
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
