import { useContext, useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { ContextProps } from "../Context";
import Header from "../Body/Header/Header";
import Footer from "../Body/Footer";
import ProgressBar from "./ProgressBar";
import TitleCourse from "./TitleCourse";
import ArrowBack from "../Body/ArrowBack";
import ClassVideo from "./ClassVideo";
import ControlsVideo from "./ControlsVideo";
import FinishCourse from "./FinishCourse";
import ItemClass from "./ItemClass";
import styled from "styled-components";

function MediaPlayer() {
  const { coursename } = useParams(),
    {
      myCourses,
      loadContent,
      setLoadContent,
      progressValue,
      setProgressValue,
      setCourseName,
    } = useContext(ContextProps),
    [classData, setClassData] = useState({}),
    [numberClass, setNumberClass] = useState(0),
    [courseInProgress, setCourseInProgress] = useState(true),
    [lastClass, setLastClass] = useState(0),
    [courseId, setCourseId] = useState(null);

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
            setCourseId(myCourses[0].id);
            setLastClass(myCourses[0].classes.length);
            setCourseName(coursename);
          }
          break;

        case "Curso Medio":
          {
            setClassData({
              classId: direction(1).id,
              className: direction(1).name,
              classURL: direction(1).URL,
            });
            setCourseId(myCourses[1].id);
            setLastClass(myCourses[1].classes.length);
            setCourseName(coursename);
          }
          break;

        case "Curso Avanzado":
          {
            setClassData({
              classId: direction(2).id,
              className: direction(2).name,
              classURL: direction(2).URL,
            });
            setCourseId(myCourses[2].id);
            setLastClass(myCourses[2].classes.length);
            setCourseName(coursename);
          }
          break;

        default:
          {
            setClassData({
              classId: direction(0).id,
              className: direction(0).name,
              classURL: direction(0).URL,
            });
            setCourseId(myCourses[0].id);
            setLastClass(myCourses[0].classes.length);
            setCourseName(coursename);
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

  function selectClassManually(classId, loadBoolean) {
    function updateClass() {
      if (numberClass !== classId) {
        const classSelected = myCourses[courseId].classes.find(
          _class => _class.id === classId
        );

        const { id: idClass } = classSelected;

        setClassData({
          classId: direction(courseId, idClass).id,
          className: direction(courseId, idClass).name,
          classURL: direction(courseId, idClass).URL,
        });
        setNumberClass(idClass);
      }
    }

    function updateProgressBar() {
      classId++;
      let newProgress = Math.ceil(11.11 * classId);
      newProgress = newProgress === 101 ? newProgress-- : newProgress;
      setProgressValue(newProgress);
    }

    function scrollToVideo() {
      setLoadContent(loadBoolean);
      const container = document.querySelector("#elScrollVaInThisSite"),
        position = container.getBoundingClientRect();
      document.documentElement.style.scrollBehavior = "smooth";
      window.scrollTo(position.x, position.y);
    }

    setCourseInProgress(true);
    updateClass();
    updateProgressBar();
    scrollToVideo();
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

      <ContentContainer id="elScrollVaInThisSite">
        <TitleContent>
          Contenido
          <span>Aquí se mostrará el proceso de este curso.</span>
        </TitleContent>

        <NameCourse>{coursename}</NameCourse>

        <ListFollowingClasses>
          {myCourses[courseId]?.classes.map(item => (
            <ItemClass
              key={item.id}
              item={item}
              numberClass={numberClass}
              selectClassManually={selectClassManually}
            />
          ))}
        </ListFollowingClasses>

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
    row-gap: 5em;
  `,
  MediaContainer = styled.div`
    width: 80vw;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: space-between;
    row-gap: 2.3em;

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
      row-gap: 1.5em;
    }
  `,
  ContentContainer = styled.section`
    background-color: #ffffff;
    width: 100vw;
    height: auto;
    display: flex;
    align-items: end;
    flex-direction: column;
    justify-content: start;
    border-top: 4px solid #ff6700;
    padding-top: 2.5em;
    row-gap: 0.8em;
  `,
  TitleContent = styled.p`
    font-family: "Poppins", sans-serif;
    font-size: 1.7em;
    font-weight: bold;
    width: 90vw;
    color: #000;
    margin-bottom: 1.3em;
    text-align: start;

    span {
      font-size: 0.8em;
      font-weight: 400;
      display: block;
    }

    @media (max-width: 576px) {
      width: 100vw;
      margin-bottom: 1em;
      text-align: center;
    }
  `,
  NameCourse = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    font-size: 1.5em;
    color: #ff6700;
    text-align: start;
    width: 75vw;

    @media (max-width: 576px) {
      width: 100vw;
      font-size: 1.3em;
      text-align: center;
    }
  `,
  ListFollowingClasses = styled.ul`
    font-family: "Poppins", sans-serif;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    width: 70vw;
    row-gap: 0.5em;
    padding-bottom: 2.5em;

    @media (max-width: 576px) {
      width: 90vw;
    }
  `;

/* Lo guardo por si las moscas
<Themes>
          <Article>
            <div
              style={{
                display: "flex",
                columnGap: "1.3em",
                alignItems: "center",
                justifyContent: "start",
                width: "100%",
              }}
            >
              <CircleSVG />
              <ClassesText>Clases</ClassesText>
            </div>

            <ListFollowingClasses>
              {myCourses[courseId]?.classes.map(item => (
                <ItemClass
                  key={item.id}
                  item={item}
                  numberClass={numberClass}
                  selectClassManually={selectClassManually}
                />
              ))}
            </ListFollowingClasses>
          </Article>
        </Themes>


        Themes = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100vw;
    column-gap: 1.5em;
    row-gap: 3em;

    @media (max-width: 576px) {
      row-gap: 1em;
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
  ClassesText = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.2em;
    color: #000000;

    @media (max-width: 576px) {
      font-size: 1em;
    }
  `,

*/
