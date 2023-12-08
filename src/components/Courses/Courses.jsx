import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_PATH } from "../../utils/consts.js";
import { useMyContext } from "../Context.jsx";
import Course from "./Course.jsx";
import styled from "styled-components";
import LoadComponent from "../Body/LoadComponent.jsx";

function Courses() {
  const { user, isAuthenticated } = useAuth0(),
    [courses, setCourses] = useState([]),
    [coursesDB, setCoursesDB] = useState([]),
    { setMyCourses } = useMyContext();

  useEffect(() => {
    async function getCoursesDB() {
      const courses = await fetch(`${BACK_PATH}/getcoursesdb`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
        }),
        json = await courses.json();
      setCoursesDB(json);
      setMyCourses(json);
    }
    getCoursesDB();
  }, []);

  useEffect(() => {
    async function recoveryCourses() {
      const cursos = await fetch(`${BACK_PATH}/getcourses`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ usuario: user.email }),
        }),
        json = await cursos.json();
      if (json.length > 0) {
        setCourses(json);
        localStorage.removeItem("cart-courses");
      }
    }
    if (isAuthenticated) {
      recoveryCourses();
    }
  }, []);

  useEffect(() => {
  if (courses.length > 0) {
    const courseIds = courses.map(course => course.id);
    const filteredCoursesDB = coursesDB.filter(item => !courseIds.includes(item.id));
    const courseComplete = [...courses, ...filteredCoursesDB]
    if (filteredCoursesDB.length <= 3) {
      setCoursesDB(courseComplete);
    }
  }
  }, [courses]);

  return (
    <CoursesContainer id="allcourses">
      <Title>
        Cursos
        <span> Eleva tus habilidades de un nivel inicial a avanzado.</span>
      </Title>

      <ListCourses>
        {coursesDB.length > 0 ? (
          coursesDB
            .sort((a, b) =>
              a.id.localeCompare(b.id, undefined, {
                numeric: true,
                sensitivity: "base",
              })
            )
            .map(course => <Course key={course._id} course={course} />)
        ) : (
          <LoadComponent isCourses />
        )}
      </ListCourses>
    </CoursesContainer>
  );
}

export default Courses;

const CoursesContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-radius: 8px;
    width: 100vw;
    height: max-content;
    margin: 3em auto;
  `,
  Title = styled.h2`
    font-family: "Poppins", monospace;
    font-size: calc(32px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #fff;
    height: 12vh;
    width: 80vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    row-gap: 0.5em;
    letter-spacing: 1px;
    margin-bottom: 3em;
    span {
      font-weight: 300;
      letter-spacing: 0;
      font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    }
    @media (min-width: 1224px) {
      margin-bottom: 0;
    }
  `,
  ListCourses = styled.ol`
    list-style: none;
    display: flex;
    flex-direction: column;
    row-gap: 2em;
    align-items: center;
    justify-content: space-between;
    width: 80vw;
    padding: 2em 0;
    @media (min-width: 1224px) {
      flex-direction: row;
      row-gap: 0;
    }
  `;
