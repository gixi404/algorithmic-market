import Popup from "./Popup";
import { CloseCartSVG, UserSVG } from "../../svgs";
import IconCart from "../ShoppingCart/IconCart";
import styled from "styled-components";

function Menu(props) {
  const { menuActive, setMenuActive } = props;

  return (
    <Container>
      <Div>
        <CloseCartSVG menuActive={menuActive} setMenuActive={setMenuActive} />
        <IconCart />
        <UserSVG />
      </Div>

      <NavContainer>
        <NavLink href="#allCourses">Cursos</NavLink>
        <NavLink href="#aboutUs">Sobre&nbsp;Nosotros</NavLink>
        <NavLink href="#contact">Contacto</NavLink>
      </NavContainer>

      <Popup isMobile />
    </Container>
  );
}

export default Menu;

const Container = styled.div`
    height: 50vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #fff;
  `,
  NavContainer = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 0.5em;
    width: 100%;
    height: 13vh;
  `,
  NavLink = styled.a`
    color: #2e2e2e;
    text-decoration: none;
    font-family: "Poppins", monospace;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    text-transform: capitalize;
  `,
  Div = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
    width: 100vw;
  `;
