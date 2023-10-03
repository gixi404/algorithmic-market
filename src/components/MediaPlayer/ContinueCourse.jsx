import styled from "styled-components";
import { useMyContext } from "../Context";

function ContinueCourse(props) {
  const { setContinueCourse } = props,
    { setErrorVideo } = useMyContext();

  function handleClick() {
    setErrorVideo(false);
    setContinueCourse(false);
  }

  return (
    <Letter>
      <Title>
        <span>Continúa donde te quedaste</span>
      </Title>
      <Btn onClick={handleClick}>Seguir</Btn>
    </Letter>
  );
}

export default ContinueCourse;

const Letter = styled.div`
    background-color: rgb(202, 202, 202);
    width: 80vw;
    height: calc((9 / 16) * 80vw);
    outline: 0;
    border: 0;
    color: #000;
    display: flex;
    row-gap: 2em;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
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
  `,
  Btn = styled.button`
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
  `;
