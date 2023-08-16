import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useContext } from "react";
import { ContextProps } from "../Context.jsx";
import Header from "../Body/Header.jsx";
import MyCourse from "./MyCourse.jsx";
import Footer from "../Body/Footer.jsx";
import styled from "styled-components";

function MyCourses() {
  const { myCourses } = useContext(ContextProps);

  return (
    <Container>
      <Header pathIsMyCourses />

      <MyCoursesContainer>
        <h2>My Courses</h2>
        {myCourses.length === 0 ? (
          <WithoutCourses>You don't have courses yet</WithoutCourses>
        ) : (
          <ListMyCourses>
            {myCourses.map(course => (
              <MyCourse key={course.id + "bought"} dataCourse={course} />
            ))}
          </ListMyCourses>
        )}
      </MyCoursesContainer>

      <Footer />
    </Container>
  );
}

export default withAuthenticationRequired(MyCourses);

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 100vh;
`;

const MyCoursesContainer = styled.div`
  background-color: #457b9d;
  width: 90vw;
  height: 50vh;
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
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  div{
    margin: 0 2vw;
    transition: all 0.3s ease;
    &:hover{
      cursor: pointer;
      background-color: rgb(211, 148, 211);
    }
  }
`;

const WithoutCourses = styled.p`
  color: #fff;
`;
