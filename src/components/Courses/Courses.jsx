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
  border-radius: 1rem;
  width: 100%;
  height: 100%;
`;

const TextCourses = styled.p`
  font-size: 2.8rem;
  font-family: "Poppins", monospace;
  font-weight: 500;
  color: #ebebeb;
  width: 80%;
`;

const ListCourses = styled.ol`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  padding: 2rem 0;
`;
