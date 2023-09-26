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
    { allCourses } = useMyContext(),
    isFirstClass = Number(numberClass) === 0,
    isLastClass = Number(numberClass) === Number(lastClass);

  function handleFinishCourse() {
    setCourseInProgress(false);
    allCourses[courseid_params].isCompleted = true;
  }

  return (
    <Controls>
      {isFirstClass && courseInProgress ? (
        <PreviousZero>Clase&nbsp;Anterior</PreviousZero>
      ) : courseInProgress ? (
        <ControlBtn onClick={previousClass}>Clase&nbsp;Anterior</ControlBtn>
      ) : null}

      {isLastClass && courseInProgress ? (
        <FinishBtn onClick={handleFinishCourse}>Finalizar&nbsp;Curso</FinishBtn>
      ) : courseInProgress ? (
        <ControlBtn onClick={nextClass}>Clase&nbsp;Siguiente</ControlBtn>
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: "100vw",
          }}
        >
          <GoToMyCourses to="/mycourses" style={{ textDecoration: "none" }}>
            Mis&nbsp;Cursos
          </GoToMyCourses>
        </div>
      )}
    </Controls>
  );
}

export default ControlsVideo;

const Controls = styled.div`
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
  ControlBtn = styled(Link)`
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
  PreviousZero = styled.button`
    opacity: 0.5;
    border: 2px solid #ff6700;
    background-color: transparent;
    color: #ff6700;
    text-decoration: none;
    display: flex;
    width: 70vw;
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
  FinishBtn = styled.button`
    background-color: #ff6700;
    color: #ffffff;
    border: 2px solid #fff;
    text-decoration: none;
    display: flex;
    width: 70vw;
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
  GoToMyCourses = styled(Link)`
    background-color: #ffffff;
    color: #ff6700;
    border: 2px solid #ff6700;
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
  `;
