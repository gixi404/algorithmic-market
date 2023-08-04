import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <p>Hecho por Vaito and giXi</p>
    </FooterContainer>
  );
}

export default Footer;

const FooterContainer = styled.footer`
  background-color: #fff;
  width: 100vw;
  height: 70px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
