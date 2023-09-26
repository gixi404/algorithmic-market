import styled from "styled-components";

function TitleCourse(props) {
  const { coursename, className } = props;

  return (
    <TitleContainer>
      {coursename}
      <span>{className}</span>
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
  font-size: calc(32px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

  span {
    color: #939393;
    font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  }

  @media (max-width: 1024px) {
    align-items: center;
  }
`;
