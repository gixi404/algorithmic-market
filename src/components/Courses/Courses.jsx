import { useEffect, useState } from "react";
import { useMyContext } from "../Context";
import { useAuth0 } from "@auth0/auth0-react";
import Course from "./Course.jsx";
import styled from "styled-components";

function Courses() {
  const {user, isAuthenticated} = useAuth0()
  const [courses, setCourses] = useState()
  useEffect(()=>{
    const recuperarCursos = async () => {
      const cursos = await fetch("http://localhost:3001/getcourses",{method:"POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({usuario:user.email})
      })
      const json = await cursos.json()
      json.length > 0 ? setCourses(json) : ''
    }
    isAuthenticated ? recuperarCursos() : undefined
  },[])
  const { allCourses } = useMyContext();

  return (
    <CoursesContainer id="allcourses">
      <Title>
        Cursos
        <span>Eleva tus habilidades de un nivel inicial a avanzado.</span>
      </Title>

      <ListCourses>
        {
        courses 
        ?
        (
          courses.map(course =>(
            <Course key={course._id} course={course} />
          ))
        )
        : 
        (
          allCourses.map(course => (
          <Course key={course.id} course={course} />
        ))
        )
        } 
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
