import aboutUsImg from "../../img/about-us-img.webp";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container id="aboutus">
      <Content>
        <Text>
          <Title>Sobre Nosotros</Title>
          <p>
            En{" "}
            <span style={{ fontStyle: "italic", color: "#ff6700" }}>
              Algorithmic Market
            </span>
            , somos personas dispuestas y dedicadas a transformar las
            aspiraciones financieras en realidad de nuestros alumnos.
            Establecido con la visión de brindar a las personas el conocimiento
            y las herramientas para conquistar la excelencia en los graficos y
            el mercado. Algorithmic Market esta exclusivamente al servicio de
            sus estudiantes para que alcancen sus metas.
            <br /> <br />
            Nuestra misión es brindar educación de primer nivel, recursos unicos
            y ayuda incomparable a nuestros traders de todos los niveles. Desde
            principiantes que dan sus primeros pasos hasta profesionales
            experimentados.
          </p>
        </Text>

        <ImgContainer>
          <Img src={aboutUsImg} alt="imágen de trabajo en equipo" />
        </ImgContainer>
      </Content>
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
  Content = styled.div`
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
    height: 530px;
    @media (max-width: 992px) {
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
