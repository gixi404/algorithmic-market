import { ContextProps } from "../Context";
import { useContext } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link as Linkk } from "react-router-dom";
import LoginBtn from "../Log/LoginBtn.jsx";
import LogoutBtn from "../Log/LogoutBtn.jsx";
import menuImg from "../../img/menu.png";
import styled from "styled-components";

function Header({ pathIsMyCourses }) {
  const { isAuthenticated } = useAuth0();
  const { isDesktop, isMobile } = useContext(ContextProps);

  const HeaderContainer = styled.header`
      background-color: #fff;
      width: 100vw;
      min-height: 13vh;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-bottom: 4px solid #ff6700;
      padding-bottom: ${isDesktop( "0", "1rem" )};
    `,
    WebContainer = styled.div`
      width: ${isDesktop( "80%", "100%" )};
      display: flex;
      flex-direction: ${isDesktop( "row", "column" )};
      align-items: center;
      justify-content: ${isDesktop( "space-between", "center" )};
      row-gap: 0.5rem;
    `,
    WebName = styled.p`
      font-size: 1.8rem;
      text-transform: uppercase;
      font-family: "Poppins", monospace;
      letter-spacing: 1.3px;
      font-weight: 600;
      color: #ff6700;
    `,
    Menu = styled.img`
      width: 45px;
      height: 45px;
    `,
    NavContainer = styled.nav`
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      column-gap: 1.3rem;
      min-width: 30vw;
      height: 5.5vh;
    `,
    NavLink = styled.a`
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
    `,
    Link = styled( Linkk )`
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
    `,
    SpecialLink = styled( Linkk )`
      position: absolute;
      right: 4vw;
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
  return (
    <HeaderContainer>
      <WebContainer>
        <Link to="/">
          <WebName>king of the market</WebName>
        </Link>

        {isMobile ? (
          <Menu src={menuImg} />
        ) : (
          <NavContainer>
            {pathIsMyCourses ? (
              <Link to="/">Inicio</Link>
            ) : (
              <>
                <NavLink href="#allCourses">Courses</NavLink>
                <NavLink href="#aboutUs">About&nbsp;Us</NavLink>
                <NavLink href="#contact">Contact</NavLink>
              </>
            )}
              {isAuthenticated ? <LogoutBtn /> : <LoginBtn />}
              
          </NavContainer>
        )}
              <SpecialLink id="cart" to="/shoppingcart">Cart</SpecialLink>
      </WebContainer>
    </HeaderContainer>
  );
}

export default Header;
