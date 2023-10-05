import styled from "styled-components";

function ProgressBar(props) {
  const { progressValue } = props,
    progress = Math.ceil(progressValue),
    formatProgress = progress === 99 ? 100 : progress;

  return (
    <ProgressContainer>
      <Progress name="progress-course" value={progress} max={100} />
      <LabelBar htmlFor="progress-course">Progreso {formatProgress}%</LabelBar>
    </ProgressContainer>
  );
}

export default ProgressBar;

const ProgressContainer = styled.div`
    margin-top: 0.5em;
    display: flex;
    flex-direction: column-reverse;
    align-items: end;
    justify-content: flex-start;
    @media (max-width: 1024px) {
      align-items: center;
    }
  `,
  LabelBar = styled.label`
    font-family: "Poppins", sans-serif;
    font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 300;
  `,
  Progress = styled.progress`
    width: 50vw;
    max-width: 300px;
    height: 3.3vh;
  `;
