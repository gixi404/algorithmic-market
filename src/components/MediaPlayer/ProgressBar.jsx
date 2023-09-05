import styled from "styled-components";

function ProgressBar() {
  const ProgressSVG = () => (
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
        width="100"
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
  );

  return (
    <ProgressContainer>
      <ProgressSVG name="progress-course" max="100" value="25" />
      <LabelBar htmlFor="progress-course">Progreso 25%</LabelBar>
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
  `;
