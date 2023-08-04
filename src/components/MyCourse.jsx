import styled from "styled-components";

function MyCourse(props) {
  const { nameCourse, imgCourse } = props;

  return (
    <MyCourseContainer>
      <MyNameCourse>{nameCourse}</MyNameCourse>
      <br />
      <img src={imgCourse} alt="img course" />
      <button>VER</button>
    </MyCourseContainer>
  );
}

export default MyCourse;

const MyCourseContainer = styled.div`
  background-color: rgba(255, 214, 255, 0.6);
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

const MyNameCourse = styled.p`
  font-size: 1.5rem;
  color: black;
  font-style: italic;
`;
