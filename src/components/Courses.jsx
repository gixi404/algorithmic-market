import { useContext } from "react";
import { ContextProps } from "./Context";
import Course from "./Course";
import styled from "styled-components";

function Courses() {
  const { allCourses } = useContext(ContextProps);

  return (
    <CoursesContainer id="allCourses">
      <h2 style={{ color: "#fff" }}>Cursos</h2>

      <ListCourses>
        {allCourses.map(course => (
          <Course
            key={course.id}
            idCourse={course.id}
            nameCourse={course.name}
            priceCourse={course.price}
            imgCourse={course.img}
          />
        ))}
      </ListCourses>
    </CoursesContainer>
  );
}

export default Courses;

const CoursesContainer = styled.div`
  width: 330px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  row-gap: 2rem;
  padding: 1rem 0;
`;

const ListCourses = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  row-gap: 3rem;
`;
