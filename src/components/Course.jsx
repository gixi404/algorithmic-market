import { useState, useContext } from "react";
import { ContextProps } from "./Context.jsx";
import styled from "styled-components";

function Course(props) {
  const { nameCourse, imgCourse, priceCourse, idCourse } = props;
  const [detailsCourseOne, setDetailsCourseOne] = useState();

  const { allCourses, myCourses, setMyCourses } = useContext(ContextProps);

  function buyCourse(id) {
    const addCourse = allCourses.find(course => course.id === id);
    setMyCourses([...myCourses, addCourse]);
  }

  return (
    <CourseContainer>
      {!detailsCourseOne ? (
        <>
          <NameCourse>{nameCourse}</NameCourse>
          <b>{"$" + priceCourse}</b>
          <br />
          <img src={imgCourse} alt="img course" />
          <br />

          <DetailsCourse onClick={() => setDetailsCourseOne(!detailsCourseOne)}>
            Ver Detalles
          </DetailsCourse>
        </>
      ) : (
        <>
          <button onClick={() => setDetailsCourseOne(false)}>Atrás</button>
          <p>
            Este curso está orientado a aquellas personas que ya tienen
            conocimiento en trading y desean conocer en detalle una operatoria
            avanzada para llegar a un nivel superior.
          </p>
          <button onClick={() => buyCourse(idCourse)}>Comprar</button>
        </>
      )}
    </CourseContainer>
  );
}

export default Course;

const CourseContainer = styled.div`
  background-color: rgba(255, 214, 255, 0.6);
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
`;

const NameCourse = styled.p`
  font-size: 1.5rem;
  color: black;
  font-style: italic;
`;

const DetailsCourse = styled.p`
  font-size: 1.3rem;
  color: black;
`;
