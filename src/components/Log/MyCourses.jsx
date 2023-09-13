import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useContext } from "react";
import { ContextProps } from "../Context.jsx";
import Header from "../Body/Header/Header.jsx";
import MyCourse from "./MyCourse.jsx";
import Footer from "../Body/Footer.jsx";
import styled from "styled-components";

function MyCourses() {
  const { myCourses } = useContext(ContextProps);

  return (
    <Container>
      <Header pathIsMyCourses />

      <MyCoursesContainer>
        <TextMyCourses>My Courses</TextMyCourses>
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
    min-height: 100vh;
  `,
  MyCoursesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  `,
  TextMyCourses = styled.p`
    font-size: 2.8rem;
    font-family: "Poppins", monospace;
    font-weight: 500;
    color: #ebebeb;
    width: 80%;
    margin-top: 3rem;
  `,
  ListMyCourses = styled.ol`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 80%;
    padding: 2rem 0;
    margin-bottom: 3rem;
  `,
  WithoutCourses = styled.p`
    color: #fff;
  `;
