import { useContext } from "react";
import { ContextProps } from "../Context";
import Course from "./Course.jsx";
import styled from "styled-components";

function Courses() {
  const { allCourses } = useContext(ContextProps);

  return (
    <CoursesContainer id="allCourses">
      <Text>
        <Title>
          Contact us
          <TitleSpan>
            We're Here to Listen and Help. Send your doubts or queries!
          </TitleSpan>
        </Title>
      </Text>
      <ListCourses>
        {allCourses.map(course => (
          <Course key={course.id} dataCourse={course} />
        ))}
      </ListCourses>
    </CoursesContainer>
  );
}

export default Courses;

const CoursesContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    width: 100vw;
    height: max-content;
    margin: 3rem auto;
  `,
  Text = styled.article`
    color: #fff;
    height: 12vh;
    width: 80vw;
  `,
  Title = styled.p`
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    row-gap: 0.5rem;
  `,
  TitleSpan = styled.span`
    font-size: 1.4rem;
  `,
  ListCourses = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    padding: 2rem 0;
    @media (max-width: 850px) {
      flex-direction: column;
    }
  `;
