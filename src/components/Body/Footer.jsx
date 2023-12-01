import { Link as Linkk } from "react-router-dom";
import { scrollToSection } from "../../utils/commonFn.js";
import stripeImg from "../../img/stripe.png";
import styled from "styled-components";

function Footer() {
  const urlWhatsApp =
    "https://wa.me/2615731250?text=Hola Staff Lym, los contacto por...";

  return (
    <Container>
      <Content>
        <Img
          onClick={() => {
            window.open("https://stripe.com/es/privacy");
          }}
          src={stripeImg}
        />

        <Nav>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("allcourses")}
          >
            Cursos
          </li>
          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("aboutus")}
          >
            Sobre Nosotros
          </li>

          <li
            style={{ cursor: "pointer" }}
            onClick={() => scrollToSection("contact")}
          >
            Contacto
          </li>
        </Nav>

        <Div>
          <Link to="/privacy">Política de Privacidad</Link>
          <a
            style={{ fontWeight: 400 }}
            href={urlWhatsApp}
            rel="noreferrer"
            target="_blank"
          >
            Creado por Staff Lym
          </a>
        </Div>
      </Content>
      <Copyright>Copyright &copy; 2023 Algorithmic Market</Copyright>
    </Container>
  );
}

export default Footer;

const Container = styled.footer`
    background-color: #1e1e1e;
    width: 100vw;
    height: auto;
    padding: 2em 0;
    max-height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 5px;
    border-top: 4px solid #ff6700;
  `,
  Content = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    row-gap: 0.6em;
    justify-content: center;
    font-family: "Poppins", monospace;
    @media (max-width: 578px) {
      row-gap: 1em;
    }

    @media (min-width: 768px) {
      width: 80vw;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
    }
    p {
      color: #fff;
      font-weight: 300;
      letter-spacing: 0.3px;
      font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    }
    a {
      text-decoration: none;
      color: #fff;
      font-weight: 300;
      letter-spacing: 0.3px;
      font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      transition-duration: 0.1s;
      &:hover {
        color: #797979;
      }
    }
  `,
  Img = styled.img`
    width: 310px;
    height: 100px;
    cursor: pointer;
    @media (max-width: 768px) {
      width: 210px;
      height: 70px;
      align-self: flex-start;
    }
  `,
  Div = styled.div`
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 768px) {
      width: 80vw;
      flex-direction: row;
      column-gap: 0.8em;
      justify-content: space-between;
    }
  `,
  Nav = styled.nav`
    list-style: none;
    color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    @media (max-width: 768px) {
      width: 80vw;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      column-gap: 0.8em;
    }
  `,
  Copyright = styled.p`
    font-family: "Poppins", monospace;
    font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #fff;
    text-align: start;
    width: 80vw;
    padding-top: 1em;
    border-top: 2px solid #fff;
    margin-top: 1em;
  `,
  Link = styled(Linkk)`
    color: #fff;
    font-size: 1em;
    text-decoration: none;
    letter-spacing: 0.3px;
    font-weight: 400 !important;
  `;
