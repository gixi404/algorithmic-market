import { useAuth0 } from "@auth0/auth0-react";
import ViewCourse from "../Log/ViewCourse.jsx";
import BuyBtn from "./Button.jsx";
import courseOne from "../../img/course-img.webp";
import courseTwo from "../../img/course-two.webp";
import courseThree from "../../img/course-three.webp";
import styled from "styled-components";

function Course(props) {
  const { course } = props,
    { isAuthenticated, user } = useAuth0(),
    { name, description, isBought, id } = course,
    getIsCompleted = localStorage.getItem(`${user?.email}-isCompleted:${name}`);

  return (
    <CourseContainer>
      {isAuthenticated && getIsCompleted && (
        <CourseCompleted>
          <p>Completado</p>
        </CourseCompleted>
      )}

      <Img
        src={id == 0 ? courseOne : id == 1 ? courseTwo : courseThree}
        loading="lazy"
        alt={`imágen de curso ${name}`}
      />

      <ContainerTexts>
        <NameCourse>{name}</NameCourse>
        <DescriptionCard>{description}</DescriptionCard>
      </ContainerTexts>

      <ButtonContainer>
        {isBought ? (
          <ViewCourse title="Ver" url={`/mycourses/${id}`} />
        ) : (
          <BuyBtn title="Más Información" url={`/details/${id}`} />
        )}
      </ButtonContainer>
    </CourseContainer>
  );
}

export default Course;

const CourseContainer = styled.article`
    width: 70vw;
    height: max-content;
    max-width: 290px;
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
    padding: 0;
    border-radius: 8px;
    border-right: 3px solid #ff6700;
    border-bottom: 3px solid #ff6700;
    position: relative;
    @media (max-width: 480px) {
      height: 360px;
    }
  `,
  ContainerTexts = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    row-gap: 0.5em;
    height: 170px;
    margin-top: 0.1em;
    margin-bottom: 1em;
  `,
  NameCourse = styled.h3`
    color: black;
    width: 90%;
    text-align: start;
    font-family: "Poppins", monospace;
    font-size: calc(20px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-weight: 500;
  `,
  DescriptionCard = styled.p`
    width: 90%;
    text-align: start;
    font-family: "Poppins", sans-serif;
    font-size: 0.9em;
    font-weight: 400;
    @media (max-width: 576px) {
      font-size: 0.8em;
    }
  `,
  Img = styled.img`
    width: 100%;
    height: 16vh;
    max-height: 120px;
    object-fit: cover;
    object-position: center;
    border-radius: 5px 5px 0 0;
  `,
  ButtonContainer = styled.div`
    height: 6vh;
    min-height: 60px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 0.5em;
  `,
  CourseCompleted = styled.span`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 3;
    height: 2.2vh;
    width: max-content;
    background-color: #23b523;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    p {
      font-family: "Poppins", monospace;
      font-size: calc(11px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      letter-spacing: 1px;
      color: #000000;
      padding: 0 1em;
    }
  `;
