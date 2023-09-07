import Skeleton from "react-loading-skeleton";
import styled from "styled-components";

function TitleCourse(props) {
  const { coursename, classData } = props;

  return (
    <TitleContainer>
      {coursename}
      <span>{classData.className}</span>
    </TitleContainer>
  );
}

export default TitleCourse;

const TitleContainer = styled.p`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;

    span {
      color: #939393;
      font-size: 1.2rem;
    }
  `,
  SkeletonContainer = styled.div`
    animation-name: skeleton;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;
    width: 300px;
    border-radius: 0.6rem;
    height: calc((9 / 16) * 5vw);

    @keyframes skeleton {
      0% {
        background-color: rgb(24, 24, 84);
      }
      50% {
        background-color: rgba(255, 255, 255, 0.7);
      }
      100% {
        background-color: rgb(24, 24, 84);
      }
    }

    @media (max-width: 992px) {
      height: calc((9 / 16) * 90vw);
    }

    @media (max-width: 576px) {
      height: calc((9 / 16) * 100vw);
    }
  `;
