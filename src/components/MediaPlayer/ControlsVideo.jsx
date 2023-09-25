import { Link } from "react-router-dom";
import styled from "styled-components";

function ControlsVideo(props) {
  const {
      numberClass,
      previousClass,
      nextClass,
      lastClass,
      courseInProgress,
      setCourseInProgress,
    } = props,
    isFirstClass = Number(numberClass) === 0,
    isLastClass = Number(numberClass + 1) === Number(lastClass);

  return (
    <Controls>
      {isFirstClass ? (
        <PreviousZero>Clase&nbsp;Anterior</PreviousZero>
      ) : (
        <ControlBtn onClick={previousClass}>Clase&nbsp;Anterior</ControlBtn>
      )}

      {isLastClass && courseInProgress ? (
        <FinishBtn onClick={() => setCourseInProgress(false)}>
          Finalizar&nbsp;Curso
        </FinishBtn>
      ) : courseInProgress ? (
        <ControlBtn onClick={nextClass}>Clase&nbsp;Siguiente</ControlBtn>
      ) : (
        <PreviousZero>Clase&nbsp;Siguiente</PreviousZero>
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
    text-decoration: none;
    display: flex;
    width: 60vw;
    max-width: 350px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid #ff6700;
    background-color: transparent;
    outline: none;
    color: #ff6700;
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
    display: flex;
    width: 65vw;
    max-width: 400px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid #ff6700;
    background-color: transparent;
    outline: none;
    color: #ff6700;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    opacity: 0.5;
  `,
  FinishBtn = styled.button`
    background-color: #ff6700;
    color: #ffffff;
    border: 2px solid #fff;
    text-decoration: none;
    display: flex;
    width: 65vw;
    max-width: 400px;
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
  InivisbleBtn = styled.button`
    display: flex;
    width: 65vw;
    max-width: 400px;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border: 2px solid transparent;
    background-color: transparent;
    outline: none;
    color: transparent;

    @media (max-width: 576px) {
      width: 45vw;
      font-size: 1rem;
    }
  `;
