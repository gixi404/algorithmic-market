import rata from "../../img/rata.jpg";
import styled from "styled-components";
import BuyBtn from "./Button";
function Course({ dataCourse }) {
  return (
    <CourseContainer>
      <Img src={rata} alt="img course" />
      <NameCourse>{dataCourse.name}</NameCourse>
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
        Tiempo estimado: 90hr
      </p>
      <ButtonContainer>
        <BuyBtn dataCourse={dataCourse} />
      </ButtonContainer>
    </CourseContainer >
  );
}

export default Course;

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
const NameCourse = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: "Poppins", monospace;
  font-weight: 500;
  padding: 1rem;
`;
const Img = styled.img`
  width: 300px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px 8px 0 0;
`;
const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;
