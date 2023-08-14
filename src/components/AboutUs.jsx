import styled from "styled-components";

function AboutUs() {
  return (
    <AboutUsContainer id="aboutUs">
      <h4>¿Quiénes somos?</h4>
      <p style={{ width: "90%" }}>
        En Academia Forex, ofrecemos la mejor plataforma de aprendizaje online
        porque los estudiantes siempre son el espíritu que nos moviliza.Es por
        eso que el programa de aprendizaje se adapta y personaliza fácilmente
        para satisfacer las necesidades de cada estudiante, sin importar dónde
        se encuentren ni su nivel de conocimiento. Con un equipo apasionado,
        contamos con asistencia por teléfono, email o sesiones de video para que
        aprendas esta habilidad y te conviertas en un trader profesional.
      </p>
    </AboutUsContainer>
  );
}

export default AboutUs;

const AboutUsContainer = styled.div`
  background-color: #457b9d;
  width: 70%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  row-gap: 2rem;
  text-align: center;
`;
