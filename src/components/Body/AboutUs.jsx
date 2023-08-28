import styled from "styled-components";
import Imgg from "../../img/brisasexo.jpg";

function AboutUs() {
  return (
    <Container id="aboutUs">
      <AboutUsContainer>
        <Text>
          <Title>Sobre nosotros</Title>
          <p>
            En efecto no se con que rellenar acá pero lo intentamos <br />
            <br />
            La inteligencia artificial ha revolucionado muchas industrias, desde
            la atención médica hasta la fabricación. Su capacidad para analizar
            grandes cantidades de datos y realizar tareas complejas ha llevado a
            avances significativos en la toma de decisiones, la automatización
            de procesos y la mejora de la eficiencia.
            <br /> <br />
            Sin embargo, también plantea desafíos éticos y de privacidad que
            deben abordarse con cautela para asegurar un uso responsable y
            beneficioso en nuestra sociedad moderna. deben abordarse con cautela
            para asegurar un uso responsable y beneficioso en nuestra sociedad
            moderna.
          </p>
        </Text>

        <ImgContainer>
          <img src={Imgg} width="100%" height="100%" />
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
  border: 0;
  background-color: #ebebeb;
  font-family: "Poppins", monospace;
`;

const AboutUsContainer = styled.div`
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
`;

const Text = styled.article`
  height: max-content;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  justify-content: space-between;

  @media (max-width: 480px) {
    width: 100vw;
    text-align: center;
  }

  @media (max-width: 1024px) {
    width: 100vw;
    text-align: start;
  }
`;

const Title = styled.p`
  font-size: 2.5rem;

  @media (min-width: 320px) {
    font-size: 2rem;
    padding-bottom: 2rem;
  }
`;

const ImgContainer = styled.article`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 400px;
  height: 400px;

  @media (max-width: 1024px) {
    display: none;
  }
`;
