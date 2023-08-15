import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../Context.jsx";
import PayLayout from "./PayLayout.jsx";
import styled from "styled-components";

function CourseDetails() {
  const { coursedetails } = useParams();
  const { courseSelected } = useContext(ContextProps);

  const { name, price, img, description } = courseSelected(coursedetails);

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
      <p style={{ width: "100%", textAlign: "center" }}>{description}</p>
      <PayLayout
        courseSelected={courseSelected}
        coursedetails={coursedetails}
      />
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
