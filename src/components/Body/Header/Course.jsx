import { useContext } from "react";
import { ContextProps } from "../../Context";
import VisitSVG from "./VisitSVG";
import styled from "styled-components";

function Course() {
  const { progressValue, courseName } = useContext(ContextProps),
    verifyData = (isTrue, isFalse = null) =>
      courseName !== "" ? isTrue : isFalse;

  return (
    <Container>
      <Name>{verifyData(courseName, "Inicia tu curso...")}</Name>

      <progress
        style={{ width: "80%", height: "3vh" }}
        value={verifyData(Math.ceil(progressValue), 0)}
        max="100"
        name="progress"
      />

      <Div>
        <label htmlFor="progress">
          Progreso {verifyData(Math.ceil(progressValue), 0)}%
        </label>
        {verifyData(<VisitSVG />)}
      </Div>
    </Container>
  );
}

export default Course;

const Container = styled.article`
    border-radius: 0.5em;
    background: rgba(255, 159, 96, 0.3);
    width: 85%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 0;
    font-family: "Poppins", monospace;
    row-gap: 0.2em;
  `,
  Name = styled.p`
    font-size: 1.2em;
    color: black;
    width: 80%;
    text-align: center;
    font-weight: 400;
    text-align: start;
  `,
  Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    font-size: 0.9em;
    color: #000;
  `;
