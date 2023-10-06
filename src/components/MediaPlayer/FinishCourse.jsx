import styled from "styled-components";

function FinishCourse() {
  return (
    <FinishLetter>
      <Title>
        <span>¡Felicidades por completar el curso! </span>
        Te invitamos a continuar avanzando con nuestro próximo curso.
      </Title>
    </FinishLetter>
  );
}

export default FinishCourse;

const FinishLetter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3em;
    background-color: #fff;
    width: 80vw;
    height: calc((9 / 16) * 80vw);
    border-radius: 12px;

    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
      row-gap: 0.3em;
    }

    @media (max-width: 576px) {
      width: 100vw;
      height: calc((9 / 16) * 100vw);
    }
  `,
  Title = styled.p`
    display: flex;
    padding: 0 2em;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2em;
    text-align: center;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: calc(15px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-style: normal;
    font-weight: 500;

    span {
      color: #ff6700;
      font-family: "Poppins", sans-serif;
      font-size: calc(30px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      font-style: normal;
      font-weight: 600;
    }

    @media (max-width: 992px) {
      padding: 0em;
      row-gap: 0.3em;
    }
  `;
