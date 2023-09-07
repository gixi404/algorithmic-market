import styled from "styled-components";

function ControlsVideo(props) {
  const {
    numberClass,
    previousClass,
    nextClass,
    lastClass,
    courseInProgress,
    setCourseInProgress,
  } = props;

  if (Number(numberClass + 1) === Number(lastClass)) {
    return (
      <Controls>
        <ControlBtn onClick={previousClass}>Clase&nbsp;Anterior</ControlBtn>
        {courseInProgress ? (
          <FinishBtn onClick={() => setCourseInProgress(false)}>
            Finalizar&nbsp;Curso
          </FinishBtn>
        ) : (
          <InivisbleBtn>&nbsp;</InivisbleBtn>
        )}
      </Controls>
    );
  }

  if (Number(numberClass) === 0) {
    return (
      <Controls>
        <PreviousZero onClick={previousClass}>Clase&nbsp;Anterior</PreviousZero>
        <ControlBtn onClick={nextClass}>Clase&nbsp;Siguiente</ControlBtn>
      </Controls>
    );
  }

  return (
    <Controls>
      <ControlBtn onClick={previousClass}>Clase&nbsp;Anterior</ControlBtn>
      <ControlBtn onClick={nextClass}>Clase&nbsp;Siguiente</ControlBtn>
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

    @media (max-width: 576px) {
      width: 95vw;
      flex-direction: row;
      column-gap: 1rem;
    }
  `,
  ControlBtn = styled.button`
    display: flex;
    min-width: 27.1875vw;
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
    font-size: 1.3rem;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(0.955);
      cursor: pointer;
    }

    @media (max-width: 576px) {
      width: 45vw;
      font-size: 1rem;
    }
  `,
  PreviousZero = styled.button`
    display: flex;
    min-width: 27.1875vw;
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
    font-size: 1.3rem;
    opacity: 0.5;

    @media (max-width: 576px) {
      width: 45vw;
      font-size: 1rem;
    }
  `,
  FinishBtn = styled.button`
    display: flex;
    min-width: 27.1875vw;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid #fff;
    background-color: #ff6700;
    outline: none;
    color: #ffffff;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(0.955);
      cursor: pointer;
    }

    @media (max-width: 576px) {
      width: 45vw;
      font-size: 1rem;
    }
  `,
  InivisbleBtn = styled.button`
    display: flex;
    min-width: 27.1875vw;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid transparent;
    background-color: transparent;
    outline: none;
    color: transparent;
    font-size: 1.3rem;

    @media (max-width: 576px) {
      width: 45vw;
      font-size: 1rem;
    }
  `;
