import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as Linkk } from "react-router-dom";
import LoginBtn from "../Log/LoginBtn.jsx";
import LogoutBtn from "../Log/LogoutBtn.jsx";
import styled from "styled-components";

function Header({ pathIsMyCourses }) {
  const { user, isAuthenticated } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  window.addEventListener("click", () => setShowProfile(false));

  function handleProfile(e) {
    setShowProfile(!showProfile);
    e.stopPropagation();
  }

  return (
    <HeaderContainer>
      <WebContainer>
        <Link to="/">
          <WebName
            style={{
              color: "#ff6700",
            }}
          >
            king of the market
          </WebName>
        </Link>

        <NavContainer>
          {pathIsMyCourses ? (
            <Link to="/">Inicio</Link>
          ) : (
            <>
              <NavLink href="#allCourses">Courses</NavLink>
              <NavLink href="#aboutUs">Us</NavLink>
              <NavLink href="#contact">Contact</NavLink>
            </>
          )}
        </NavContainer>

        {isAuthenticated ? <LogoutBtn /> : <LoginBtn />}
      </WebContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.section`
  background-color: #fff;
  width: 100vw;
  height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const WebContainer = styled.div`
  width: 80vw;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const WebName = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
  font-family: "Poppins", monospace;
  letter-spacing: 1.3px;
  font-style: normal;
  width: 100%;
`;
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  column-gap: 1.3rem;
  width: 30vw;
  height: 5.5vh;
`;
const NavLink = styled.a`
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
