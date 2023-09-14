import styled from "styled-components";

function ProgressBar(props) {
  const { progressValue } = props;

  return (
    <ProgressContainer id="progress">
      <Progress
        name="progress-course"
        value={Math.ceil(progressValue)}
        max="100"
      />
      <LabelBar htmlFor="progress-course">
        Progreso {Math.ceil(progressValue)}%
      </LabelBar>
    </ProgressContainer>
  );
}

export default ProgressBar;

const ProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 1.3rem;

    @media (max-width: 576px) {
      flex-direction: column-reverse;
      align-items: start;
      row-gap: 0.5rem;
    }
  `,
  LabelBar = styled.label`
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
  `,
  Progress = styled.progress`
    width: 18vw;
    height: 3vh;
  `;
