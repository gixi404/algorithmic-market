import { useContext, useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { ContextProps } from "../Context";
import Header from "../Body/Header";
import Footer from "../Body/Footer";
import ProgressBar from "./ProgressBar";
import TitleCourse from "./TitleCourse";
import ArrowBack from "../Body/ArrowBack";
import ClassVideo from "./ClassVideo";
import ControlsVideo from "./ControlsVideo";
import FinishCourse from "./FinishCourse";
import CircleSVG from "./CircleSVG";
import styled from "styled-components";

function MediaPlayer() {
  const { coursename } = useParams();
  const { myCourses } = useContext(ContextProps);
  const [classData, setClassData] = useState({});
  const [numberClass, setNumberClass] = useState(0);
  const [courseInProgress, setCourseInProgress] = useState(true);
  const [loadContent, setLoadContent] = useState(false);
  const [progressValue, setProgressValue] = useState(11.11);
  const [lastClass, setLastClass] = useState(0);

  useEffect(() => {
    function selectCourse() {
      switch (coursename) {
        case "Curso Inicial":
          {
            setClassData({
              classId: direction(0).id,
              className: direction(0).name,
              classURL: direction(0).URL,
            });
            setLastClass(myCourses[0].classes.length);
          }
          break;

        case "Curso Medio":
          {
            setClassData({
              classId: direction(1).id,
              className: direction(1).name,
              classURL: direction(1).URL,
            });
            setLastClass(myCourses[1].classes.length);
          }
          break;

        case "Curso Avanzado":
          {
            setClassData({
              classId: direction(2).id,
              className: direction(2).name,
              classURL: direction(2).URL,
            });
            setLastClass(myCourses[2].classes.length);
          }
          break;

        default:
          {
            setClassData({
              classId: direction(0).id,
              className: direction(0).name,
              classURL: direction(0).URL,
            });
            setLastClass(myCourses[0].classes.length);
          }
          break;
      }
    }

    return () => selectCourse();
  }, [coursename]);

  function direction(numberCourse, numberClass = 0) {
    return myCourses[numberCourse].classes[numberClass];
  }

  function previousClass() {
    if (numberClass > 0) {
      setLoadContent(true);
      let previousClassData = {};

      switch (coursename) {
        case "Curso Inicial":
          {
            previousClassData = {
              classId: direction(0, numberClass - 1).id,
              className: direction(0, numberClass - 1).name,
              classURL: direction(0, numberClass - 1).URL,
            };
          }
          break;

        case "Curso Medio":
          {
            previousClassData = {
              classId: direction(1, numberClass - 1).id,
              className: direction(1, numberClass - 1).name,
              classURL: direction(1, numberClass - 1).URL,
            };
          }
          break;

        case "Curso Avanzado":
          {
            setClassData({
              classId: direction(2, numberClass - 1).id,
              className: direction(2, numberClass - 1).name,
              classURL: direction(2, numberClass - 1).URL,
            });
          }
          break;

        default:
          {
            previousClassData = {
              classId: direction(0, numberClass - 1).id,
              className: direction(0, numberClass - 1).name,
              classURL: direction(0, numberClass - 1).URL,
            };
          }
          break;
      }

      setCourseInProgress(true);
      setNumberClass(numberClass - 1);
      setClassData(previousClassData);
      setProgressValue(progressValue - 11.11);
    }
  }

  function nextClass() {
    if (numberClass < lastClass - 1) {
      setLoadContent(true);
      let nextClassData = {};

      switch (coursename) {
        case "Curso Inicial":
          {
            nextClassData = {
              classId: direction(0, numberClass + 1).id,
              className: direction(0, numberClass + 1).name,
              classURL: direction(0, numberClass + 1).URL,
            };
          }
          break;

        case "Curso Medio":
          {
            nextClassData = {
              classId: direction(1, numberClass + 1).id,
              className: direction(1, numberClass + 1).name,
              classURL: direction(1, numberClass + 1).URL,
            };
          }
          break;

        case "Curso Avanzado":
          {
            nextClassData = {
              classId: direction(2, numberClass + 1).id,
              className: direction(2, numberClass + 1).name,
              classURL: direction(2, numberClass + 1).URL,
            };
          }
          break;

        default:
          {
            nextClassData = {
              classId: direction(0, numberClass + 1).id,
              className: direction(0, numberClass + 1).name,
              classURL: direction(0, numberClass + 1).URL,
            };
          }
          break;
      }
      setNumberClass(numberClass + 1);
      setClassData(nextClassData);
      setProgressValue(progressValue + 11.11);
    }
  }

  return (
    <Container>
      <Header />

      <ArrowBack route="/mycourses" />

      <MediaContainer>
        <HeaderMedia>
          <TitleCourse coursename={coursename} classData={classData} />
          <ProgressBar progressValue={progressValue} />
        </HeaderMedia>

        {courseInProgress ? (
          <ClassVideo
            classData={classData}
            loadContent={loadContent}
            setLoadContent={setLoadContent}
          />
        ) : (
          <FinishCourse
            setCourseInProgress={setCourseInProgress}
            setLoadContent={setLoadContent}
          />
        )}

        <ControlsVideo
          numberClass={numberClass}
          previousClass={previousClass}
          nextClass={nextClass}
          lastClass={lastClass}
          courseInProgress={courseInProgress}
          setCourseInProgress={setCourseInProgress}
        />
      </MediaContainer>

      <ContentContainer>
        <TitleContent>
          Contenido
          <span>Aquí se mostrará el proceso y contenido de este curso.</span>
        </TitleContent>

        <NameCourse>Curso Inicial: Master en trading</NameCourse>

        <Themes>
          <Article>
            <div
              style={{
                display: "flex",
                columnGap: "1.3rem",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <CircleSVG />
              <FirstClass>Unidad 1: Avances técnicos</FirstClass>
            </div>
            <FollowingClasses>
              <span>1.1 Introducción a los avances técnicos</span>
              <span>1.2 Oscilación e indicadores</span>
              <span>1.3 Monumentos de velas</span>
              <span>1.4 Introducción a los avances técnicos</span>
              <span>1.5 Oscilación e indicadores</span>
              <span>1.6 Introducción a los avances técnicos</span>
              <span>1.7 Oscilación e indicadores</span>
              <span>1.8 Monumentos de velas</span>
              <span>1.9 Monumentos de velas</span>
            </FollowingClasses>
          </Article>
        </Themes>

        <Footer />
      </ContentContainer>
    </Container>
  );
}

export default withAuthenticationRequired(MediaPlayer);

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #f5f5f5;
    row-gap: 5rem;
  `,
  MediaContainer = styled.div`
    width: 80vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 2.3rem;

    @media (max-width: 992px) {
      width: 90vw;
    }

    @media (max-width: 576px) {
      width: 100vw;
    }
  `,
  HeaderMedia = styled.header`
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    width: 100%;
    height: 77px;

    @media (max-width: 992px) {
      flex-direction: column;
      align-items: center;
      row-gap: 1.5rem;
    }
  `,
  ContentContainer = styled.section`
    background-color: #ffffff;
    width: 100vw;
    height: auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: start;
    row-gap: 2.3rem;
    padding-top: 2rem;
    border-top: 4px solid #ff6700;
  `,
  TitleContent = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    width: 80vw;
    color: #000;
    span {
      font-size: 1.1rem;
      font-weight: 400;
      display: block;
    }

    @media (max-width: 576px) {
      width: 100vw;
      font-size: 1.5rem;
      text-align: center;
      span {
        font-size: 0.9rem;
      }
    }
  `,
  NameCourse = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.5rem;
    color: #ff6700;
    text-align: center;
    width: 100vw;
  `,
  Themes = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    column-gap: 1.5rem;
    row-gap: 3rem;

    @media (max-width: 576px) {
      row-gap: 1rem;
    }
  `,
  Article = styled.article`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    @media (max-width: 576px) {
      width: 100vw;
      align-items: center;
    }
  `,
  FirstClass = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: #000000;

    @media (max-width: 576px) {
      font-size: 1rem;
    }
  `,
  FollowingClasses = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 300;
    font-size: 1.1rem;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 70%;
    row-gap: 0.5rem;

    @media (max-width: 576px) {
      font-size: 1rem;
      width: 58%;
    }
  `;
