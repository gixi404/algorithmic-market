import { useContext, useEffect } from "react";
import { ContextProps } from "./Context.jsx";
import MyCourse from "./MyCourse";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Header from "./Header.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import Footer from "./Footer.jsx";

function MyCourses() {
  const { myCourses } = useContext(ContextProps);

  return (
    <Container>
      <Header pathIsMyCourses />

      <MyCoursesContainer>
        <h2>Mis cursos</h2>
        {myCourses.length === 0 ? (
          <WithoutCourses>No tienes cursos aún</WithoutCourses>
        ) : (
          <ListMyCourses>
            {myCourses.map(course => (
              <MyCourse
                key={course.id + "bought"}
                nameCourse={course.name}
                imgCourse={course.img}
              />
            ))}
          </ListMyCourses>
        )}
      </MyCoursesContainer>

      <Footer />
    </Container>
  );
}

export default MyCourses;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const MyCoursesContainer = styled.div`
  background-color: #457b9d;
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

const ListMyCourses = styled.ol`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  row-gap: 3rem;
`;

const WithoutCourses = styled.p`
  color: #fff;
`;
