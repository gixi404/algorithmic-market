import { useAuth0 } from "@auth0/auth0-react";
import { Link as Linkk } from "react-router-dom";
import LoginBtn from "../Log/LoginBtn.jsx";
import LogoutBtn from "../Log/LogoutBtn.jsx";
import styled from "styled-components";

function Header({ pathIsMyCourses }) {
  const { isAuthenticated } = useAuth0();

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
              <NavLink href="#aboutUs">About Us</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </>
          )}
          {isAuthenticated ? <LogoutBtn /> : <LoginBtn />}
        </NavContainer>
      </WebContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  background-color: #fff;
  width: 100vw;
  height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-bottom: 4px solid #ff6700;

  @media (max-width: 850px) {
    height: 10vh;
  }
  @media (max-width: 440px) {
    height: max-content;
  }
`;
const WebContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 850px) {
    button {
      width: max-content;
      padding: 6px 10px;
    }
    @media (max-width: 690px) {
      justify-content: center;
      button {
        display: none;
      }
    }
  }
`;
const WebName = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-family: "Poppins", monospace;
  letter-spacing: 1.3px;
  font-style: normal;
  width: max-content;
  font-weight: 600;
  color: #ff6700;
  @media (max-width: 850px) {
    font-size: 1.5rem;
  }
  @media (max-width: 440px) {
    text-align: center;
    font-size: 1.4rem;
    width: 80vw;
  }
`;
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1.3rem;
  width: 30vw;
  height: 5.5vh;
  @media (max-width: 690px) {
    display: none;
  }
`;
const NavLink = styled.a`
  color: #2e2e2e;
  text-decoration: none;
  font-family: "Poppins", monospace;
  font-weight: 500;
  font-size: 1.3rem;
  text-transform: capitalize;
  transition-duration: 0.1s;
  &:hover {
    color: #888888;
  }
  @media (max-width: 850px) {
    font-size: 1rem;
  }
`;
const Link = styled(Linkk)`
  color: #2e2e2e;
  text-decoration: none;
  font-family: "Poppins", monospace;
  font-weight: 500;
  font-size: 1.1rem;
  text-transform: capitalize;
  transition-duration: 0.1s;
  &:hover {
    color: #888888;
  }
`;
