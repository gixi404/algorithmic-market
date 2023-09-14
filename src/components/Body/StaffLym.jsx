import Header from "../Body/Header/Header";
import Footer from "./Footer";
import { WhatsAppSVG, GmailSVG, TelegramSVG } from "../svgs";
import styled from "styled-components";

function StaffLym() {
  const phone = 2615731250,
    mail = "gioliotta.io@gmail.com",
    user = "gixi_lym",
    message = encodeURIComponent("Hola, me gustaría adquirir sus servicios"),
    urlWhatsApp = `https://wa.me/${phone}?text=${message}`,
    urlMail = `mailto:${mail}`,
    urlTelegram = `https://t.me/${user}?text=${message}`;

  return (
    <Container>
      <Header />

      <StaffLymContainer>
        <Text>
          En <i>Staff Lym</i>, convertimos tus ideas en realidad. Nos dedicamos
          al desarrollo de aplicaciones web y móviles. Si tienes algún proyecto
          en mente o cualquier consulta, contactanos por estos medios:
        </Text>
        <ContactContainer>
          <a href={urlWhatsApp} target="_blank" rel="noopener noreferrer">
            <WhatsAppSVG />
          </a>

          <a href={urlMail} target="_blank" rel="noopener noreferrer">
            <GmailSVG />
          </a>

          <a href={urlTelegram} target="_blank" rel="noopener noreferrer">
            <TelegramSVG />
          </a>
        </ContactContainer>
      </StaffLymContainer>

      <Footer />
    </Container>
  );
}

export default StaffLym;

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
  `,
  StaffLymContainer = styled.div`
    background-color: #ebebeb;
    width: 80vw;
    min-height: 50vh;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 3em;

    @media (max-width: 480px) {
      width: 90vw;
      margin: 3em 0;
      padding: 2em 0;
    }
  `,
  Text = styled.p`
    text-align: center;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-family: "Poppins", monospace;
    width: 80%;
    @media (max-width: 480px) {
      width: 100%;
    }
  `,
  ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    column-gap: 1em;
    @media (max-width: 480px) {
      flex-direction: column;
      row-gap: 1em;
    }
  `;
