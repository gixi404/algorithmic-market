import ratadOs from "../../img/rata.jpg";
import styled from "styled-components";
import BuyBtn from "../Courses/Button";
import { Link } from "react-router-dom";

function MyCourse(props) {
  const { dataCourse } = props;
  const title = "View",
    url = `/mycourses/${dataCourse.name}`;

  return (
    <>
      <CourseContainer>
        <Img src={ratadOs} alt="img course" />

        <NameCourse>{dataCourse.name}</NameCourse>

        <DescriptionCard>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          gravida ultrices justo eu pretium. Ut quis ipsum nec ligula fringilla
        </DescriptionCard>

        <TimeCard>
          <Span>🕓</Span>
          Tiempo estimado: 90hr
        </TimeCard>

        <ButtonContainer>
          {/* <BuyBtn course={dataCourse} title={title} url={url} /> */}
          <Link to={`/mycourses/${dataCourse.name}`}>go to course</Link>
        </ButtonContainer>
      </CourseContainer>
    </>
  );
}

export default MyCourse;

const CourseContainer = styled.div`
    background-color: #ebebeb;
    width: 22.5vw;
    height: max - content;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    border-radius: 8px;
    padding: 0;
    @media (max-width: 1060px) {
      width: 25vw;
      overflow: hidden;
    }
    @media (max-width: 850px) {
      margin: 2vh 0;
      width: 80vw;
    }
  `,
  NameCourse = styled.p`
    font-size: 1.5rem;
    color: black;
    font-family: "Poppins", monospace;
    font-weight: 500;
    padding: 1rem;
    @media (max-width: 940px) {
      padding-bottom: 0.3rem;
      font-size: 1.3rem;
    }
    @media (max-width: 850px) {
      font-size: 1.7rem;
      padding: 1rem;
    }
  `,
  Img = styled.img`
    width: 22.5vw;
    height: 21vh;
    object-fit: cover;
    object-position: center;
    border-radius: 8px 8px 0 0;
    @media (max-width: 1060px) {
      width: 25vw;
    }
    @media (max-width: 850px) {
      width: 80vw;
    }
  `,
  DescriptionCard = styled.p`
    padding: 0 1rem;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 0.9rem;
    text-align: start;
    @media (max-width: 1060px) {
      font-size: 0.77rem;
    }
    @media (max-width: 850px) {
      font-size: 1rem;
    }
  `,
  TimeCard = styled.p`
    padding: 0 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2.5vh;
    font-family: Poppins;
    font-weight: 300;
    color: #353535;
    column-gap: 5px;
    font-size: 0.9rem;
    @media (max-width: 1060px) {
      font-size: 0.77rem;
      margin-top: 1vh;
    }
  `,
  Span = styled.span`
    font-size: 1.5rem;
    @media (max-width: 1060px) {
      font-size: 1rem;
    }
  `,
  ButtonContainer = styled.div`
    height: 7vh;
    width: 22.5vw;
    display: flex;
    margin-top: 1rem;
    justify-content: center;
    @media (max-width: 1060px) {
      width: 25vw;
    }
    @media (max-width: 850px) {
      width: 80vw;
    }
  `;
