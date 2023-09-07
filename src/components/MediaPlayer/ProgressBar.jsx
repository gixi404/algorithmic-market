import styled from "styled-components";

function ProgressBar(props) {
  const { progressValue } = props;

  /* const ProgressSVG = () => (
    <progress>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="300"
        height="16"
        viewBox="0 0 346 16"
        fill="none"
        color="#FF6700"
      >
        <path
          d="M8 8L338 8.00003"
          stroke="#f2a470"
          strokeWidth="15"
          strokeLinecap="round"
        />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="200"
          height="16"
          viewBox="0 0 120 16"
          fill="none"
        >
          <path
            d="M8 8H112"
            stroke="#FF6700"
            strokeWidth="15"
            strokeLinecap="round"
          />
        </svg>
      </svg>
    </progress>
  );*/

  return (
    <ProgressContainer>
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
