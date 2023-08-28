import { Link as Linkk } from "react-router-dom";
import styled from "styled-components";

function Footer() {
  return (
    <FooterContainer>
      <div
        style={{
          width: "80vw",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "end",
        }}
      >
        <div
          style={{ display: "flex", flexDirection: "column", rowGap: "9px" }}
        >
          <Link to="/privacy">Privacy Policy</Link>
          <StaffLym>Created by Staff Lym</StaffLym>
        </div>

        <Link to="/privacy">&copy; All rights reserved</Link>
      </div>
    </FooterContainer>
  );
}

export default Footer;

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
  Link = styled(Linkk)`
    color: #ffffff;
    text-decoration: none;
    font-size: 1rem;
  `,
  StaffLym = styled.p`
    color: #ffffff;
    font-size: 1rem;
  `;
