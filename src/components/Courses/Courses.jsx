import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { ContextProps } from "../Context";
import Course from "./Course.jsx";
import styled from "styled-components";

function Courses() {
  const { allCourses } = useContext(ContextProps);
  const { isAuthenticated } = useAuth0();

  return (
    <CoursesContainer id="allCourses">
      <TextCourses>{isAuthenticated ? "My Courses" : "Courses"}</TextCourses>
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
  border-radius: 1rem;
  width: 100%;
  height: 100%;
`;

const TextCourses = styled.p`
  font-size: 2.8rem;
  font-family: "Inconsolate", monospace;
  font-weight: 600;
  color: rgb(193, 163, 98);
`;

const ListCourses = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 70%;
  padding: 2rem 0;
`;
