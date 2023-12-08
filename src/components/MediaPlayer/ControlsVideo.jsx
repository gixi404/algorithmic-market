import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { useMyContext } from "../Context";
import styled from "styled-components";

function ControlsVideo(props) {
  const {
      courseid_params,
      numberClass,
      previousClass,
      nextClass,
      lastClass,
      courseInProgress,
      setCourseInProgress,
    } = props,
    { user } = useAuth0(),
    { myCourses } = useMyContext(),
    isFirstClass = Number(numberClass) === 0,
    isLastClass = Number(numberClass) === Number(lastClass);

  function handleFinishCourse() {
    myCourses[courseid_params].isCompleted = true;
    setCourseInProgress(false);
    localStorage.setItem(
      `${user?.email}-isCompleted:${myCourses[courseid_params].name}`,
      true
    );
  }

  return (
    <Controls>
      {isFirstClass && courseInProgress ? (
        <PreviousZero>Clase&nbsp;Anterior</PreviousZero>
      ) : courseInProgress ? (
        <ControlBtn onClick={previousClass} aria-label="clase anterior">
          Clase&nbsp;Anterior
        </ControlBtn>
      ) : null}

      {isLastClass && courseInProgress ? (
        <FinishBtn onClick={handleFinishCourse} aria-label="finalizar curso">
          Finalizar&nbsp;Curso
        </FinishBtn>
      ) : courseInProgress ? (
        <ControlBtn onClick={nextClass} aria-label="clase siguiente">
          Clase&nbsp;Siguiente
        </ControlBtn>
      ) : (
        <ContainerBack>
          <BackBtn
            to="/mycourses"
            style={{ textDecoration: "none" }}
            aria-label="ir a mis cursos"
          >
            Mis&nbsp;Cursos
          </BackBtn>
        </ContainerBack>
      )}
    </Controls>
  );
}

export default ControlsVideo;

const controlBtnStyles = `
    border: 2px solid #ff6700;
    background-color: transparent;
    color: #ff6700;
    text-decoration: none;
    display: flex;
    width: 60vw;
    max-width: 350px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    outline: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    transition-duration: 0.2s;
    &:hover {
      transform: scale(0.955);
      cursor: pointer;
    }
`,
  Controls = styled.nav`
    display: flex;
    flex-direction: row;
    width: 99.2%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 1024px) {
      flex-direction: column-reverse;
      row-gap: 0.8em;
    }
  `,
  ControlBtn = styled.button`
    ${controlBtnStyles}
  `,
  PreviousZero = styled.button`
    ${controlBtnStyles}
    opacity: 0.5;
  `,
  FinishBtn = styled.button`
    ${controlBtnStyles}
    background-color: #ff6700;
    color: #ffffff;
    border: 2px solid #fff;
  `,
  ContainerBack = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
  `,
  BackBtn = styled(Link)`
    ${controlBtnStyles}
    background-color: #ffffff;
    color: #ff6700;
    border: 2px solid #ff6700;
  `;
