import { scrollToSection } from "../../../utils/commonFn.js";
import styled from "styled-components";

function NavHeader(props) {
  const { isMobile } = props;

  if (isMobile) {
    return (
      <ContainerMobile>
        <a onClick={() => scrollToSection("allcourses")}>Cursos</a>
        <a onClick={() => scrollToSection("aboutus")}>Sobre&nbsp;Nosotros</a>
        <a onClick={() => scrollToSection("contact")}>Contacto</a>
      </ContainerMobile>
    );
  } else {
    return (
      <Container>
        <a onClick={() => scrollToSection("allcourses")}>Cursos</a>
        <a onClick={() => scrollToSection("aboutus")}>Sobre&nbsp;Nosotros</a>
        <a onClick={() => scrollToSection("contact")}>Contacto</a>
      </Container>
    );
  }
}

export default NavHeader;

const ContainerMobile = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    column-gap: 1.3em;
    min-width: 25vw;
    height: 80px;
    a {
      color: #2e2e2e;
      text-decoration: none;
      font-family: "Poppins", monospace;
      font-size: calc(13px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      text-transform: capitalize;
    }
  `,
  Container = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 2.5em;
    width: 100%;
    height: 100%;
    transition-duration: 0.1s;
    a {
      color: #2e2e2e;
      text-decoration: none;
      font-family: "Poppins", monospace;
      font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      text-transform: capitalize;
      cursor: pointer;
      &:hover {
        color: #888888;
      }
      @media (max-width: 576px) {
        display: none;
      }
    }
  `;
