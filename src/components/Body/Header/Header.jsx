import { Link as Linkk } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import LoginBtn from "../../Log/LoginBtn.jsx";
import Profile from "../Profile/Profile.jsx";
import PopupMyCourses from "./PopupMyCourses.jsx";
import logo from "../../../img/logo.png";
import styled from "styled-components";
import IconCart from "../ShoppingCart/IconCart.jsx";

function Header() {
  const { isAuthenticated } = useAuth0();

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
          <IconCart />
          {isAuthenticated ? (
            <>
              <PopupMyCourses />
              <Profile />
            </>
          ) : (
            <LoginBtn />
          )}
        </CotainerPopLog>

        {/* <MenuSVG /> */}
      </WebContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
    background-color: #fff;
    width: 100vw;
    min-height: 80px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid #ff6700;
    padding-bottom: 0;

    @media (min-width: 1224px) {
      padding-bottom: 1rem;
    }
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
    font-size: 1rem;
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
    font-size: 1rem;
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
