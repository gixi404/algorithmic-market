import rata from "../../img/rata.jpg";
import styled from "styled-components";
import BuyBtn from "./Button";
function Course({ dataCourse }) {
  return (
    <CourseContainer>
      <Img src={rata} alt="img course" />
      <NameCourse>{dataCourse.name}</NameCourse>
      <DescriptionCard>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida
        ultrices justo eu pretium. Ut quis ipsum nec ligula fringilla
      </DescriptionCard>
      <TimeCard>
        <Span>🕓</Span>
        Tiempo estimado: 90hr
      </TimeCard>
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
const DescriptionCard = styled.p`
    padding: 0 1rem;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 0.9rem;
    text-align: start;
`;
const TimeCard = styled.p`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  font-family: Poppins;
  font-weight: 300;
  color: #353535;
  column-gap: 5px;
  font-size: 0.9rem;
`;
const Span = styled.span`
  font-size: 1.5rem;
`;
const ButtonContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
`;
