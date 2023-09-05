import styled from "styled-components";

function ControlsVideo(props) {
  const { nextClass } = props;

  return (
    <Controls>
      <ControlBtn>Clase&nbsp;Anterior</ControlBtn>
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
    width: 27.1875vw;
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
      transform: scale(1.05);
      cursor: pointer;
    }

    @media (max-width: 576px) {
      width: 45vw;
      font-size: 1rem;
    }
  `;
