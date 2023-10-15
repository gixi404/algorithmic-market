import { useState } from "react";
import { Link as Linkk } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import Menu from "./Menu.jsx";
import LoginBtn from "../../Log/LoginBtn";
import NavHeader from "./NavHeader.jsx";
import favicon from "../../../img/favicon.ico";
import { MenuSVG, UserSVG, CartSVG } from "../../svgs.jsx";
import styled from "styled-components";

function Header() {
  const { isAuthenticated } = useAuth0(),
    [menuActive, setMenuActive] = useState(false),
    path = window.location.pathname,
    verifyNav =
      path === "/" ||
      path === "/coursepurchased" ||
      path === "/details/:coursedetails";

  return menuActive ? (
    <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
  ) : (
    <Container>
      <Content>
        <Link to="/">
          <Logo
            src={favicon}
            title="Algorithmic Market"
            alt="Algorithmic Market Logo"
          />
        </Link>

        {verifyNav && <NavHeader />}

        <Icons>
          {isAuthenticated ? (
            <>
              <CartSVG />
              <UserSVG />
            </>
          ) : (
            <DivLogin>
              <LoginBtn />
            </DivLogin>
          )}
        </Icons>

        <MenuSVG menuActive={menuActive} setMenuActive={setMenuActive} />
      </Content>
    </Container>
  );
}

export default Header;

const Container = styled.header`
    background-color: #ffffff;
    width: 100vw;
    min-height: 12vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid #ff6700;
  `,
  Content = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    @media (max-width: 576px) {
      width: 90%;
      row-gap: 0.5em;
    }
  `,
  Logo = styled.img`
    margin: 5px 0;
    height: 70px;
    width: max-content;
    object-fit: cover;
    object-position: center;
  `,
  Nav = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 1.3em;
    min-width: 25vw;
    height: 80px;
    a {
      color: #2e2e2e;
      text-decoration: none;
      font-family: "Poppins", monospace;
      font-size: calc(10px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      text-transform: capitalize;
      transition-duration: 0.1s;
      &:hover {
        color: #888888;
      }
      @media (max-width: 576px) {
        display: none;
      }
    }
  `,
  Link = styled(Linkk)`
    color: #2e2e2e;
    text-decoration: none;
    font-family: "Poppins", monospace;
    font-weight: 500;
    height: 80px;
    text-align: center;
    line-height: 96px;
    text-transform: capitalize;
    transition-duration: 0.1s;

    &:hover {
      color: #888888;
    }
  `,
  Icons = styled.span`
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 2em;
    @media (max-width: 576px) {
      display: none;
    }
  `,
  DivLogin = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    height: 80px;
    width: max-content;
  `;
