import { useContext, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../Context";
import Header from "../Body/Header";
import Footer from "../Body/Footer";
import ReactLoading from "react-loading";
import styled from "styled-components";
import { useEffect } from "react";
import ProgressBar from "./ProgressBar";
import TitleCourse from "./TitleCourse";
import ClassVideo from "./ClassVideo";
import ControlsVideo from "./ControlsVideo";

function MediaPlayer() {
  const { myCourses } = useContext(ContextProps);
  const { coursename } = useParams();
  const [classData, setClassData] = useState({});
  const [numberClass, setNumberClass] = useState(0);
  // const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    function selectCourse() {
      switch (coursename) {
        case "Curso Inicial":
          setClassData({
            classId: myCourses[0].classes[0].id,
            className: myCourses[0].classes[0].name,
            classURL: myCourses[0].classes[0].URL,
          });
          break;

        case "Curso Medio":
          setClassData({
            classId: myCourses[1].classes[0].id,
            className: myCourses[1].classes[0].name,
            classURL: myCourses[1].classes[0].URL,
          });
          break;

        default:
          break;
      }
    }

    selectCourse();
  }, [coursename]);

  function nextClass() {
    if (numberClass < myCourses[0].classes.length - 1) {
      const nextClassData = {
        classId: myCourses[0].classes[numberClass + 1].id,
        className: myCourses[0].classes[numberClass + 1].name,
        classURL: myCourses[0].classes[numberClass + 1].URL,
      };
      setNumberClass(numberClass + 1);
      setClassData(nextClassData);
      // setIsLoad(true);
    }
  }

  const CircleSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 29 29"
      fill="none"
    >
      <circle cx="14.5" cy="14.5" r="14.5" fill="#FF6700" />
    </svg>
  );

  return (
    <Container>
      <Header />
      <Link to="/mycourses">Atrás</Link>

      <MediaContainer>
        <HeaderMedia>
          <TitleCourse coursename={coursename} classData={classData} />
          <ProgressBar />
        </HeaderMedia>

        {/* {isLoad && (
          <Load>
            <ReactLoading
              type="cubes"
              color="rgb(255, 255, 255)"
              width="200px"
              height="200px"
            />
          </Load>
        )} */}

        <ClassVideo classData={classData} />

        <ControlsVideo nextClass={nextClass} />
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
`;

const MediaContainer = styled.div`
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
`;

const HeaderMedia = styled.header`
  display: flex;
  flex-direction: row;
  align-items: end;
  justify-content: space-between;
  width: 100%;

  @media (max-width: 992px) {
    flex-direction: column;
    align-items: center;
    row-gap: 1.5rem;
  }
`;

const Load = styled.div`
  position: absolute;
  top: 58%;
`;

const ContentContainer = styled.section`
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
`;

const TitleContent = styled.p`
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
`;

const NameCourse = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 600;
  font-size: 1.5rem;
  color: #ff6700;
  text-align: center;
  width: 100vw;
`;

const Themes = styled.section`
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
`;

const Article = styled.article`
  width: 50vw;
  display: flex;
  flex-direction: column;
  align-items: end;
  justify-content: center;

  @media (max-width: 576px) {
    width: 100vw;
    align-items: center;
  }
`;

const FirstClass = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  color: #000000;

  @media (max-width: 576px) {
    font-size: 1rem;
  }
`;

const FollowingClasses = styled.p`
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

/*const { myCourses } = useContext(ContextProps);
  const { coursename } = useParams();

  const formatCourseId = courseId.slice(0, 1);

  const [classData, setClassData] = useState({
    classId: myCourses[0].classes[0].id,
    className: myCourses[0].classes[0].name,
    classURL: myCourses[0].classes[0].URL,
  });

  function handleChangeURL(classId) {
    setClassData({
      classId: myCourses[formatCourseId].classes[classId].id,
      className: myCourses[formatCourseId].classes[classId].name,
      classURL: myCourses[formatCourseId].classes[classId].URL,
    });
  }

   <BackBtn>
        <Link to="/mycourses">Back</Link>
      </BackBtn> 
   <Sexo>
        <MediaContainer>
          <Reproductor>
            <TextLevelCourse>
              {myCourses[formatCourseId].name}

              <MuerteALosGays>
                {" - You're watching: " + classData.className}
              </MuerteALosGays>
            </TextLevelCourse>

            {classData ? (
              <Video
                src={classData.classURL.toString()}
                loop={false}
                autoPlay={false}
                playsInline
                controls
              ></Video>
            ) : (
              <p>Select the class to see</p>
            )}
          </Reproductor>
        </MediaContainer>

        <FollowingClasses>
          {myCourses[formatCourseId].classes.map(_class => (
            <Class key={_class.id} onClick={() => handleChangeURL(_class.id)}>
              {_class.name}
            </Class>
          ))}
        </FollowingClasses>
      </Sexo> */
