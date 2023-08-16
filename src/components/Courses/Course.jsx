import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { Link as Linkk } from "react-router-dom";
import styled from "styled-components";
import { ContextProps } from "../Context";
import rata from "../../img/rata.jpg";
import PayLayout from "../Courses/PayLayout.jsx";

function Course({ dataCourse }) {
  const { isAuthenticated } = useAuth0();
  const { viewDetails, setViewDetails } = useContext(ContextProps);

  return (
    <CourseContainer>
      <Img src={rata} alt="img course" />
      <NameCourse>{dataCourse.name}</NameCourse>
      {/* <b>{"$" + dataCourse.price}</b> */}
      <p
        style={{
          padding: "0 1rem",
          fontFamily: "Poppins",
          fontWeight: "400",
          fontSize: "0.9rem",
          textAlign: "start",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida
        ultrices justo eu pretium. Ut quis ipsum nec ligula fringilla
      </p>
      <p
        style={{
          padding: "0 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
          fontFamily: "Poppins",
          fontWeight: "300",
          color: "#353535",
          columnGap: "5px",
          fontSize: "0.9rem",
        }}
      >
        <span
          style={{
            fontSize: "1.5rem",
          }}
        >
          🕓
        </span>
        Tiempo estimado: 90s
      </p>

      <BuyBtn>Buy</BuyBtn>

      {/* {isAuthenticated ? (
        <GoToCourseBtn>
          <TextGoToCourse>
            <Link to={`/Mycourses/${dataCourse.id}`}>Go to Course</Link>
          </TextGoToCourse>
        </GoToCourseBtn>
      ) : (
        <Link to={`/details/${dataCourse.id}`}>
          <DetailsCourse>see details</DetailsCourse>
        </Link>
      )} */}
    </CourseContainer>
  );
}

export default Course;

const BuyBtn = styled.button`
  position: relative;
  font-family: "Poppins", monospace;
  font-weight: 500;
  font-size: 3rem;
  width: 80%;
  height: 40px;
  padding: 8px 15px;
  margin-left: 1.8rem;
  margin-top: 1rem;
  font-size: 16px;
  color: #ff6700;
  outline: 2px solid #ff6700;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  border: none;

  &:hover {
    cursor: pointer;
    color: #fff;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
    outline: none;
    border: none;
    background-color: #ff6700;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px 8px 0 0;
`;

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
  a {
    text-decoration: none;
    color: #181818;
  }
`;

const CourseContainer = styled.div`
  background-color: #ebebeb;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-radius: 8px;
  padding: 0;
`;

const Link = styled(Linkk)`
  text-decoration: none;
`;

const NameCourse = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: "Poppins", monospace;
  font-weight: 500;
  padding: 1rem;
`;

const DetailsCourse = styled.p`
  font-size: 1.3rem;
  color: black;
`;
