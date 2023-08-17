import styled from "styled-components";
import Imgg from '../../img/brisasexo.jpg'

function AboutUs() {
  return (
    <Container id="aboutUs">
      <AboutUss>
        <Text>
          <P>Sobre nosotros</P>
          <p>En efecto no se con que rellenar acá pero lo intentamos</p>
          <p>La inteligencia artificial ha revolucionado muchas industrias, desde la atención médica hasta la fabricación. Su capacidad para analizar grandes cantidades de datos y realizar tareas complejas ha llevado a avances significativos en la toma de decisiones, la automatización de procesos y la mejora de la eficiencia.</p>
          <p>Sin embargo, también plantea desafíos éticos y de privacidad que deben abordarse con cautela para asegurar un uso responsable y beneficioso en nuestra sociedad moderna.</p>
          <p>Los viajes espaciales han capturado la imaginación de la humanidad durante décadas. Desde los primeros pasos en la Luna hasta las misiones a Marte planificadas para el futuro, la exploración del espacio exterior continúa expandiendo nuestros horizontes.</p>
          <p>A medida que la tecnología avanza, se abren nuevas posibilidades para comprender nuestro lugar en el universo y para resolver problemas terrestres mediante la investigación en el espacio. Sin embargo, los desafíos técnicos, los riesgos y los altos costos siguen siendo obstáculos importantes en esta emocionante búsqueda.</p>
        </Text>
        <ImgContainer >
          <Img src={Imgg} />
        </ImgContainer>
      </AboutUss>
    </Container>
  );
}

export default AboutUs;

const Container = styled.div`
  width: 100vw;
  height: 80vh;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
  background-color: #ebebeb;
  font-family: "Poppins", monospace;
`;
const AboutUss = styled.section`
  height: 77vh;
  width: 80vw;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 8px;
`;
const Text = styled.article`
  height: 77vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  justify-content: center;
  p{
  font-style: normal;
  font-weight: normal;
  width: 40vw;
  white-space: break-spaces;
  overflow: hidden;
  padding: 1vh 0;
  &:nth-child(2){
    padding-top: 0;
  }
  }
  p:first-child{
    padding: 0;
  }
`;
const P = styled.p`
  font-size: 2.5rem;
`;
const ImgContainer = styled.article`
  width: 40vw;
  height: 77vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Img = styled.img`
  height: 64vh;
  padding-top: 5vh;
  width: 35vw;
`;
