import { useContext } from "react";
import { ContextProps } from "../Context";
import Course from "./Course.jsx";
import styled from "styled-components";

function Courses() {
  const { allCourses } = useContext(ContextProps);

  return (
    <CoursesContainer id="allCourses">
      <TextCourses>Courses</TextCourses>
      <ListCourses>
        {allCourses.map(course => (
          <Course key={course.id} dataCourse={course} />
        ))}
      </ListCourses>
    </CoursesContainer>
  );
}

export default Courses;

const CoursesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  width: 100vw;
  height: max-content;
`;
const TextCourses = styled.p`
  font-size: 2.8rem;
  font-family: "Poppins", monospace;
  font-weight: 500;
  color: #ebebeb;
  width: 80vw;
`;

const ListCourses = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80vw;
  padding: 2rem 0;
  @media(max-width: 850px){
    flex-direction: column;
  }
`;
