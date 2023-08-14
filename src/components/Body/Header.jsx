import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as Linkk } from "react-router-dom";
import LoginBtn from "../Log/LoginBtn.jsx";
import styled from "styled-components";
import LogoutBtn from "../Log/LogoutBtn.jsx";

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
      <WebNameContainer>
        <Link to="/">
          <WebName>king of the market</WebName>
        </Link>
        {isAuthenticated && (
          <UserImg src={user.picture} onClick={e => handleProfile(e)} />
        )}
      </WebNameContainer>
      {showProfile && (
        <ProfileContainer>
          <LogoutBtn />
        </ProfileContainer>
      )}

      <NavContainer>
        {pathIsMyCourses ? (
          <Link to="/">Inicio</Link>
        ) : (
          <>
            <NavLink href="#allCourses">Cursos</NavLink>
            <NavLink href="#aboutUs">Nosotros</NavLink>
            <NavLink href="#contact">Contacto</NavLink>
          </>
        )}
      </NavContainer>

      {!isAuthenticated && <LoginBtn />}
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  background-color: #2b2d42;
  width: 100vw;
  height: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 0;
`;

const WebNameContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
  justify-content: space-between;
  position: relative;
`;

const WebName = styled.p`
  font-size: 1.8rem;
  text-transform: uppercase;
  color: rgb(193, 163, 98);
  font-family: "Inconsolata", monospace;
  letter-spacing: 1.3px;
`;

const UserImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  outline: 2px solid rgb(193, 163, 98);
  cursor: pointer;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 45px;
  position: absolute;
  right: 250px;
  top: 18px;
  border-radius: 8px;
  background-color: transparent;
  cursor: pointer;
`;

const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  height: 50px;
`;

const NavLink = styled.a`
  color: #b4b4b4;
  text-decoration: none;
  font-style: italic;
  text-transform: capitalize;
  transition-duration: 0.1s;
  &:hover {
    color: #fff;
  }
`;

const Link = styled(Linkk)`
  color: #b4b4b4;
  text-decoration: none;
  font-style: italic;
  text-transform: capitalize;
  transition-duration: 0.1s;
  &:hover {
    color: #fff;
  }
`;
