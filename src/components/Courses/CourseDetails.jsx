import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../Context.jsx";
import PayLayout from './PayLayout.jsx'
import styled from "styled-components";
import { useEffect } from "react";
function CourseDetails() {
  const { allCourses, courseBuy, setCourseBuy } = useContext(ContextProps);
  const { coursedetails } = useParams();

  // Buscar el curso seleccionado
  const courseSelected = allCourses.find(course => course.id === Number(coursedetails));
  const { name, description, img, price } = courseSelected
  const course = {
    name: courseSelected.name,
    description: courseSelected.description,
    id: courseSelected.id,
  }
  useEffect(() => {
    setCourseBuy(course)
  }, [courseSelected]);
  useEffect(() => { if (courseBuy !== null) { console.log(courseBuy) } }, [courseBuy])

  return (
    <Container>
      <Link to="/">Atrás</Link>

      <h1>{name}</h1>
      <br />
      <img src={img} />
      <br />
      <br />
      <b>${price}</b>
      <br />
      <br />
      <p style={{ width: "100%", textAlign: "cenrter" }}>{description}</p>
      <PayLayout courseSelected={courseSelected} />
      <br />
      <br />

    </Container>
  );
}

export default CourseDetails;

const Container = styled.div`
  background-color: #457b9d;
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2rem 0;
  margin: 2rem auto;
  display: block;
  text-align: center;
  border-radius: 13px;
`;
