import { Link } from "react-router-dom";
import styled from "styled-components";

function Course({ dataCourse }) {
  return (
    <CourseContainer>
      <NameCourse>{dataCourse.name}</NameCourse>
      <b>{"$" + dataCourse.price}</b>
      <br />
      <img src={dataCourse.img} alt="img course" />
      <br />
      <Link to={`/details/${dataCourse.id}`}>
        <DetailsCourse>Ver Detalles</DetailsCourse>
      </Link>
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
