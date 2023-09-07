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
`;
