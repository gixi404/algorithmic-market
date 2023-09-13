import Header from "../Body/Header/Header";
import Footer from "./Footer";
import styled from "styled-components";

function StaffLym() {
  return (
    <Container>
      <Header />

      <StaffLymContainer>
        <p>
          orem ipsum es el texto que se usa habitualmente en diseño gráfico en
          demostraciones de tipografías o de borradores de diseño para probar el
          diseño visual antes de insertar el texto final. Aunque no posee
          actualmente fuentes para justificar sus hipótesis, el profesor de
          filología clásica orem ipsum esorem ipsum es el texto que se usa
          habitualmente en diseño gráfico en demostraciones de tipografías o de
          borradores de diseño para probar el diseño visual antes de insertar el
          texto final. Aunque no posee actualmente fuentes para justificar sus
          hipótesis, el profesor de filología clásicaorem ipsum es el texto que
          <br /> <br />
          tipografías o de borradoresorem ipsum es el texto que se usa
          habitualmente en diseño gráfico en demostraciones de tipografías o de
          borradores de diseño para probar el diseño visual antes de insertar el
          texto final. Aunque no posee actualmente fuentes para justificar sus
          hipótesis, el profesor de filología clásicaorem ipsum es el texto que
          se usa habitualmente en diseño gráfico en demostraciones de
          <br /> <br />
          tipografías o de borradores de diseño para probar el diseño visual
          antes de insertar el texto final. Aunque no posee actualmente fuentes
          para justificar sus hipótesis, el profesor de filología clásica de
          diseño para probar el diseño visual antes de insertar el texto final.
          Aunque no posee actualmente fuentes para justificar sus hipótesis, el
          profesor de filología clásicaorem ipsum es el texto que se usa
          habitualmente en diseño gráfico en demostraciones de tipografías o de
          borradores de diseño para probar el diseño visual antes de insertar el
          <br /> <br />
          texto final. Aunque no posee actualmente fuentes para justificar sus
          hipótesis, el profesor de filología clásica el texto que se usa
          habitualmente en diseño gráfico en demostraciones de tipografías o de
          borradores de diseño para probar el diseño visual antes de insertar el
          texto final. Aunque no posee actualmente fuentes para justificar sus
          hipótesis, el profesor de filología clásica
        </p>
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
    font-family: "Poppins", monospace;
  `,
  StaffLymContainer = styled.div`
    background-color: #ebebeb;
    width: 80vw;
    height: max-content;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 1rem 2rem;
    margin: 2rem 0;
    @media (max-width: 480px) {
      width: 90vw;
    }
  `;
