import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../components/Context.jsx";
import PayLayout from './PayLayout/PayLayout.jsx'
import styled from "styled-components";
import { useEffect } from "react";

function CourseDetails() {
  const { allCourses } = useContext(ContextProps);
  const { setCourseBuy, courseBuy } = useContext(ContextProps)
  const { coursedetails } = useParams();

 const courseSelected = allCourses.find(
    courseId => Number(courseId.id) === Number(coursedetails),
  );
  const { name, price, img, description, id} = courseSelected;
    setCourseBuy({
      name: name,
      description:description,
      id: id 
    })
  useEffect(()=>{
    console.log(courseBuy)
  },[courseSelected])
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
