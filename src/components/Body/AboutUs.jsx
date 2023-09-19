import aboutUsImg from "../../img/about-us-img.jpg";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container id="aboutUs">
      <AboutUsContainer>
        <Text>
          <Title>Sobre Nosotros</Title>
          <p>
            En{" "}
            <span style={{ fontStyle: "italic", color: "#ff6700" }}>
              Algorithmic Market
            </span>
            , no somos solo una empresa, somos una comunidad de traders
            apasionados dedicados a transformar las aspiraciones financieras en
            realidad. Establecido con la visión de brindar a las personas el
            conocimiento y las herramientas para conquistar el mundo del
            trading, Algorithmic Market se ha convertido en un modelo de
            excelencia en la industria.
            <br /> <br />
            Nuestra misión es simple: brindar educación de primer nivel,
            recursos de vanguardia y soporte incomparable a operadores de todos
            los niveles. Desde principiantes que dan sus primeros pasos hasta
            profesionales experimentados.
          </p>
        </Text>

        <ImgContainer>
          <Img src={aboutUsImg} alt="Imágen de trabajo en equipo" />
        </ImgContainer>
      </AboutUsContainer>
    </Container>
  );
}

export default AboutUs;

const Container = styled.section`
    width: 100vw;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid #ff6700;
    border-top: 4px solid #ff6700;
    background-color: #ebebeb;
    font-family: "Poppins", monospace;
  `,
  AboutUsContainer = styled.div`
    height: max-content;
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 0;

    @media (min-width: 320px) {
      width: 80vw;
      padding: 2rem 0;
    }

    @media (min-width: 1024px) {
      padding: 2rem 0;
      justify-content: space-between;
    }
  `,
  Text = styled.article`
    height: max-content;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
    font-family: "Poppins", monospace;
    justify-content: space-between;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

    @media (max-width: 480px) {
      width: 100vw;
      text-align: center;
    }

    @media (max-width: 1024px) {
      width: 100vw;
      text-align: start;
    }
  `,
  Title = styled.p`
    font-size: calc(26px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-family: "Poppins", monospace;
    @media (min-width: 320px) {
      padding-bottom: 2rem;
    }
  `,
  ImgContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 400px;

    @media (max-width: 1024px) {
      display: none;
    }
  `,
  Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border-right: 3px solid #ff6700;
    border-bottom: 3px solid #ff6700;
  `;
