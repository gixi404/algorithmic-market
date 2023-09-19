import { useState } from "react";
import { Link as Linkk } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useMyContext } from "../../Context.jsx";
import IconCart from "../ShoppingCart/IconCart.jsx";
import PopupProfile from "./PopupProfile.jsx";
import Popup from "./Popup.jsx";
import Menu from "./Menu.jsx";
import LoginBtn from "../../Log/LoginBtn";
import logo from "../../../img/logo.png";
import { MenuSVG, UserSVG } from "../../svgs.jsx";
import styled from "styled-components";

function Header() {
  const { isAuthenticated } = useAuth0(),
    { IS_MOBILE } = useMyContext(),
    [menuActive, setMenuActive] = useState(false);

  if (IS_MOBILE) {
    return menuActive ? (
      <Menu menuActive={menuActive} setMenuActive={setMenuActive} />
    ) : (
      <HeaderContainer>
        <WebContainerMobile>
          <Link to="/">
            <LogoMobile
              src={logo}
              title="Algorithmic Market"
              alt="Algorithmic Market Logo"
            />
          </Link>

          <MenuSVG menuActive={menuActive} setMenuActive={setMenuActive} />
        </WebContainerMobile>
      </HeaderContainer>
    );
  }

  return (
    <HeaderContainer>
      <WebContainer>
        <Link to="/">
          <Logo
            src={logo}
            title="Algorithmic Market"
            alt="Algorithmic Market Logo"
          />
        </Link>

        <NavContainer>
          <NavLink href="#allCourses">Cursos</NavLink>
          <NavLink href="#aboutUs">Sobre&nbsp;Nosotros</NavLink>
          <NavLink href="#contact">Contacto</NavLink>
        </NavContainer>

        <CotainerPopLog>
          {isAuthenticated ? (
            <>
              <Popup />
              <IconCart />
              <UserSVG />
            </>
          ) : (
            <>
              <LoginBtn />
              <IconCart />
            </>
          )}
        </CotainerPopLog>
      </WebContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
    background-color: #ffffff;
    width: 100vw;
    min-height: 14vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid #ff6700;

    /* @media (min-width: 1224px) {
      padding-bottom: 1em;
    } */
  `,
  WebContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.5rem;

    @media (min-width: 1224px) {
      width: 80%;
      flex-direction: row;
      justify-content: space-between;
    }
  `,
  WebContainerMobile = styled.div`
    width: 90%;
    height: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    row-gap: 0.5rem;
    justify-content: space-between;
  `,
  LogoMobile = styled.img`
    height: 80px;
    width: 100px;
    object-fit: cover;
    object-position: center;
  `,
  Logo = styled.img`
    height: 96px;
    width: 120px;
    object-fit: cover;
    object-position: center;
  `,
  NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    column-gap: 1.3rem;
    min-width: 25vw;
    height: 80px;
  `,
  NavLink = styled.a`
    color: #2e2e2e;
    text-decoration: none;
    font-family: "Poppins", monospace;
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    margin-top: 16px;
    text-transform: capitalize;
    transition-duration: 0.1s;
    &:hover {
      color: #888888;
    }
  `,
  Link = styled(Linkk)`
    color: #2e2e2e;
    text-decoration: none;
    font-family: "Poppins", monospace;
    font-weight: 500;
    height: 80px;
    line-height: 96px;
    text-transform: capitalize;
    transition-duration: 0.1s;

    &:hover {
      color: #888888;
    }
  `,
  CotainerPopLog = styled.div`
    height: "100%";
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 2em;
  `;
