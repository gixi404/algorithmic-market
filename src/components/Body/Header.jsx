import { useAuth0 } from "@auth0/auth0-react";
import { Link as Linkk } from "react-router-dom";
import LoginBtn from "../Log/LoginBtn.jsx";
import LogoutBtn from "../Log/LogoutBtn.jsx";
import menuImg from "../../img/menu.png";
import Icon from "../../components/Body/ShoppingCart/ButtonCart.jsx";
import styled from "styled-components";
import Profile from "./Profile.jsx";

function Header({ pathIsMyCourses }) {
  const { isAuthenticated, } = useAuth0();
  
  return (
    <HeaderContainer>
      <WebContainer>
        <Link to="/">
          <WebName>king of the market</WebName>
        </Link>


        <NavContainer>
          {pathIsMyCourses ? (
            <Link to="/">Inicio</Link>
          ) : (
            <>
              <NavLink href="#allCourses">Courses</NavLink>
              <NavLink href="#aboutUs">About&nbsp;Us</NavLink>
              <NavLink href="#contact">Contact</NavLink>
              <Icon />
              {!isAuthenticated &&  <LoginBtn />}
            </>
          )}

          {isAuthenticated && <Profile />}
        </NavContainer>
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
  WebName = styled.p`
    font-size: 2rem;
    text-transform: uppercase;
    font-family: "Poppins", monospace;
    letter-spacing: 1.3px;
    font-weight: 600;
    color: #ff6700;
    height:80px;
    line-height: 96px;
  `,
  Menu = styled.img`
    display: block;
    width: 45px;
    height: 45px;

    @media (min-width: 1224px) {
      display: none;
    }
  `,
  NavContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    column-gap: 1.3rem;
    min-width: 30vw;
    height: 5.5vh;
    div{
      margin-top: 8px;
    }
  `,
  NavLink = styled.a`
    color: #2e2e2e;
    text-decoration: none;
    font-family: "Poppins", monospace;
    font-weight: 500;
    height: 80px;
    line-height: 96px;
    font-size: 1rem;
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
  `;
