import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as Linkk } from "react-router-dom";
import LoginBtn from "../Log/LoginBtn.jsx";
import styled from "styled-components";
import LogoutBtn from "../Log/LogoutBtn.jsx";
import defaultUserImg from "../../img/defaultImg.png";

function Header({ pathIsMyCourses }) {
  const { user, isAuthenticated } = useAuth0();
  const [showProfile, setShowProfile] = useState(false);

  window.addEventListener("click", () => setShowProfile(false));

  function handleProfile(e) {
    setShowProfile(!showProfile);
    e.stopPropagation();
  }

  return (
    <HeaderPosta>
      <Span></Span>
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
                <NavLink href="#allCourses">Cursos</NavLink>
                <NavLink href="#aboutUs">Nosotros</NavLink>
              </>
            )}
          </NavContainer>
        </WebContainer>
      </HeaderContainer>
      <User>
        {!isAuthenticated && (
          <ProfileContainer>
            <LoginBtn />
          </ProfileContainer>
        )}
        {showProfile && (
          <ProfileContainer>
            <LogoutBtn />
          </ProfileContainer>
        )}
        {isAuthenticated ? (
          <UserImg
            src={user.picture.toString() || defaultUserImg}
            alt={user.given_name + " img"}
            onClick={e => handleProfile(e)}
          />
        ) : <Span></Span>}
      </User>
    </HeaderPosta>
  );
}

export default Header;

const HeaderPosta = styled.header`
  height: 13vh;
  width: 98.5vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;
const Span = styled.span`
  width: 5vw;
  height: 13vh;
`;
const HeaderContainer = styled.section`
  width: 70vw;
  height: 13vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const WebContainer = styled.div`
  width: 70vw;
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
const User = styled.div`
  width: max-content;
  height: 13vh;
  display: flex;
  justify-content: start;
  align-items: center;
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
  align-items: center;
  position: absolute;
  text-align: center;
  justify-content: center;
  width: 8vw;
  height: 7.2vh;
  right: 5vw;
  top: 2.7vh;
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
