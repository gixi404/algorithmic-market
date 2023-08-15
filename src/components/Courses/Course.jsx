import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Link as Linkk } from "react-router-dom";
import styled from "styled-components";
import { ContextProps } from "../Context";

function Course({ dataCourse }) {
  const { isAuthenticated } = useAuth0();
  const { viewDetails, setViewDetails } = useContext(ContextProps);

  return (
    <CourseContainer>
      <NameCourse>{dataCourse.name}</NameCourse>
      {/* <b>{"$" + dataCourse.price}</b> */}

      <img src={dataCourse.img} alt="img course" />

      {isAuthenticated ? (
        <GoToCourseBtn>
          <TextGoToCourse>Ir al Curso</TextGoToCourse>
        </GoToCourseBtn>
      ) : (
        <Link to={`/details/${dataCourse.id}`}>
          <DetailsCourse>Ver Detalles</DetailsCourse>
        </Link>
      )}
    </CourseContainer>
  );
}

export default Course;

const GoToCourseBtn = styled.button`
  display: inline-block;
  border-radius: 4px;
  background-color: #3d405b;
  border: none;
  color: #ffffff;
  text-align: center;
  font-size: 17px;
  padding: 16px;
  width: 130px;
  transition: all 0.5s;
  cursor: pointer;
  margin: 5px;
  &:hover span {
    padding-right: 15px;
  }

  &:hover span:after {
    opacity: 1;
    right: 0;
  }
`;
const TextGoToCourse = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;
  &::after {
    content: "»";
    position: absolute;
    opacity: 0;
    top: 0;
    right: -15px;
    transition: 0.5s;
  }
`;

const CourseContainer = styled.div`
  background-color: rgba(233, 237, 201, 0.4);
  width: 300px;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  padding: 1rem 0;
`;

const Link = styled(Linkk)`
  text-decoration: none;
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
