import { useState } from "react";
import ViewCourse from "../Log/ViewCourse";
import BuyBtn from "./Button";
import courseImg from "../../img/course-img.jpg";
import styled from "styled-components";

function Course({ dataCourse }) {
  const [purchasedCourse, setPurchasedCourse] = useState(false);

  return (
    <CourseContainer>
      <Img src={courseImg} alt="img course" />

      <NameCourse>{dataCourse.name}</NameCourse>

      <DescriptionCard>{dataCourse.description}</DescriptionCard>

      <TimeCard>
        <Span>🕓</Span>
        Tiempo estimado: 90hr
      </TimeCard>

      <ButtonContainer>
        {purchasedCourse ? (
          <ViewCourse url={`/mycourses/${dataCourse.id}`} />
        ) : (
          <BuyBtn url={`/details/${dataCourse.id}`} />
        )}
      </ButtonContainer>
    </CourseContainer>
  );
}

export default Course;

const CourseContainer = styled.article`
    background-color: #ebebeb;
    width: 80vw;
    max-width: 310px;
    height: 440px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 0;
    z-index: 100;
    border-radius: 8px;
    border-right: 3px solid #ff6700;
    border-bottom: 3px solid #ff6700;

    @media (min-width: 1224px) {
      height: 420px;
    }
  `,
  NameCourse = styled.p`
    font-size: 1.5rem;
    color: black;
    width: 100%;
    text-align: start;
    font-family: "Poppins", monospace;
    font-weight: 500;
    padding-left: 1.6rem;
  `,
  Img = styled.img`
    width: 100%;
    height: 20vh;
    max-height: 150px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px 5px 0 0;
  `,
  DescriptionCard = styled.p`
    padding-left: 1.6rem;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 0.9rem;
    text-align: start;
  `,
  TimeCard = styled.p`
    padding-left: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin-top: 2.5vh; */
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    color: #353535;
    column-gap: 5px;
    font-size: 0.9rem;
  `,
  Span = styled.span`
    font-size: 1.5rem;
  `,
  ButtonContainer = styled.div`
    height: 7vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0 1rem 0;
  `;
