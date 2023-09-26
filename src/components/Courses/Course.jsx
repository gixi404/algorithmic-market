import ViewCourse from "../Log/ViewCourse";
import BuyBtn from "./Button";
import courseImg from "../../img/course-img.webp";
import styled from "styled-components";

function Course(props) {
  const { course } = props,
    { name, description, isCompleted, isBought, id } = course;

  return (
    <CourseContainer>
      {isCompleted && isBought && (
        <CourseCompleted>
          <p>Completado</p>
        </CourseCompleted>
      )}
      <Img src={courseImg} alt="img course" />

      <NameCourse>{name}</NameCourse>

      <DescriptionCard>{description}</DescriptionCard>

      <TimeCard>
        <Span>🕓</Span>
        Tiempo estimado: 90hr
      </TimeCard>

      <ButtonContainer>
        {isBought ? (
          <ViewCourse url={`/mycourses/${id}`} />
        ) : (
          <BuyBtn title="Más Información" url={`/details/${id}`} />
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
    position: relative;

    @media (min-width: 1224px) {
      height: 420px;
    }

    @media (max-width: 480px) {
      height: 380px;
    }
  `,
  NameCourse = styled.p`
    font-size: calc(20px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
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
    font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    text-align: start;
  `,
  TimeCard = styled.p`
    padding-left: 1.6rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    color: #000000;
    column-gap: 5px;
    font-size: calc(13px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  `,
  Span = styled.span`
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  `,
  ButtonContainer = styled.div`
    height: 7vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.5rem 0 1rem 0;
  `,
  CourseCompleted = styled.div`
    position: absolute;
    height: 2.2vh;
    width: max-content;
    background-color: #23b523;
    border-top-left-radius: 6px;
    border-bottom-right-radius: 8px;

    p {
      font-family: "Poppins", monospace;
      font-size: calc(10px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
      letter-spacing: 1px;
      color: #000000;
      padding: 0 1em;
      text-align: center;
    }
  `;
