import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as Linkk } from "react-router-dom";
import LoginBtn from "../Log/LoginBtn.jsx";
import styled from "styled-components";
import LogoutBtn from "../Log/LogoutBtn.jsx";
import defaultUserImg from "../../img/defaultImg.png";
//<a href="https://www.flaticon.com/free-icons/user" title="user icons">User icons created by Freepik - Flaticon</a>

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

        {isAuthenticated && (
          <UserImg
            src={user.picture.toString() || defaultUserImg}
            alt={user.given_name + " img"}
            onClick={e => handleProfile(e)}
          />
        )}

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
              <Link to="/contact">Contact</Link>
            </>
          )}
        </NavContainer>

        {!isAuthenticated && <LoginBtn />}
      </WebContainer>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = styled.header`
  background-color: #fff;
  width: 100vw;
  height: 100px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const WebContainer = styled.div`
  width: 80%;
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
  justify-content: flex-end;
  column-gap: 1.3rem;
  width: 53%;
  height: 50px;
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
