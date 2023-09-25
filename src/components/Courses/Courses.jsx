import { useContext } from "react";
import { useMyContext } from "../Context";
import Course from "./Course.jsx";
import styled from "styled-components";

function Courses() {
  const { allCourses } = useMyContext();

  return (
    <CoursesContainer id="allcourses">
      <Text>
        <Title>
          Cursos
          <TitleSpan>
            Eleva tus habilidades de un nivel inicial a avanzado.
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
    margin-bottom: 3rem;
    @media (min-width: 1224px) {
      margin-bottom: 0;
    }
  `,
  Title = styled.p`
    font-family: "Poppins", monospace;
    font-size: calc(32px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    row-gap: 0.5rem;
  `,
  TitleSpan = styled.span`
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  `,
  ListCourses = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 2rem;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    padding: 2rem 0;

    @media (min-width: 1224px) {
      flex-direction: row;
      row-gap: 0;
    }
  `;
