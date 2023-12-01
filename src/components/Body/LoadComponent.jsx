import styled from "styled-components";

function LoadComponent(props) {
  const { isCourses = false } = props;

  if (isCourses) {
    return (
      <LoadCourses>
        <Load />
      </LoadCourses>
    );
  } else {
    return (
      <LoadContainer>
        <Load />
      </LoadContainer>
    );
  }
}

export default LoadComponent;

const LoadContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  LoadCourses = styled.div`
    width: 100%;
    height: 360px;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  Load = styled.span`
    width: 30vw;
    max-width: 250px;
    aspect-ratio: 4;
    --_g: no-repeat
      radial-gradient(circle closest-side, #ff6700 90%, transparent);
    background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
    background-size: calc(100% / 3) 100%;
    animation: l7 1s infinite linear;
    @keyframes l7 {
      33% {
        background-size: calc(100% / 3) 0%, calc(100% / 3) 100%,
          calc(100% / 3) 100%;
      }
      50% {
        background-size: calc(100% / 3) 100%, calc(100% / 3) 0%,
          calc(100% / 3) 100%;
      }
      66% {
        background-size: calc(100% / 3) 100%, calc(100% / 3) 100%,
          calc(100% / 3) 0%;
      }
    }
  `;
