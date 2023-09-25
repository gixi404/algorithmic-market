import { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../Context";
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
  const { courseid: courseid_params } = useParams(),
    {
      myCourses,
      loadContent,
      setLoadContent,
      progressValue,
      setProgressValue,
      setCourseID,
    } = useMyContext(),
    [classData, setClassData] = useState({}),
    [numberClass, setNumberClass] = useState(0),
    [courseInProgress, setCourseInProgress] = useState(true),
    [lastClass, setLastClass] = useState(0);

  useEffect(() => {
    // const getYourClass =
    //   localStorage.getItem("your-class") !== undefined
    //     ? Number(localStorage.getItem("your-class")) - 1
    //     : 0;

    function selectCourse() {
      setClassData({
        classId: direction(courseid_params, numberClass).id,
        className: direction(courseid_params, numberClass).name,
        classURL: direction(courseid_params, numberClass).URL,
      });
      // setNumberClass(numberClass);
      setLastClass(myCourses[courseid_params]?.classes.length);
      setCourseID(courseid_params);
    }

    return () => selectCourse();
  }, [courseid_params]);

  // useEffect(() => {
  //   const classId = classData.classId;

  //   if (classId !== undefined) {
  //     const setYourClass = localStorage.setItem(
  //         "your-class",
  //         JSON.stringify(classId)
  //       ),
  //       setProgress = localStorage.setItem(
  //         "progress",
  //         JSON.stringify(progressValue)
  //       );
  //     return () => {
  //       setYourClass;
  //       setProgress;
  //     };
  //   }
  // }, [classData]);

  function direction(numberCourse, numberClass = 0) {
    return myCourses[numberCourse]?.classes[numberClass];
  }

  function previousClass() {
    if (numberClass > 0) {
      setLoadContent(true);
      let previousClassData = {
        classId: direction(courseid_params, numberClass - 1).id,
        className: direction(courseid_params, numberClass - 1).name,
        classURL: direction(courseid_params, numberClass - 1).URL,
      };
      setCourseInProgress(true);
      setNumberClass(numberClass - 1);
      setClassData(previousClassData);
      setProgressValue(progressValue - 11.11);
    }
  }

  function nextClass() {
    if (numberClass < lastClass - 1) {
      setLoadContent(true);
      let nxetClassData = {
        classId: direction(courseid_params, numberClass + 1).id,
        className: direction(courseid_params, numberClass + 1).name,
        classURL: direction(courseid_params, numberClass + 1).URL,
      };
      setCourseInProgress(true);
      setNumberClass(numberClass + 1);
      setClassData(nxetClassData);
      setProgressValue(progressValue + 11.11);
    }
  }

  function selectClassManually(classId) {
    function updateClass() {
      if (numberClass !== classId) {
        const classSelected = myCourses[courseid_params]?.classes.find(
            _class => _class.id === classId
          ),
          { id: idClass } = classSelected;

        setClassData({
          classId: direction(courseid_params, idClass).id,
          className: direction(courseid_params, idClass).name,
          classURL: direction(courseid_params, idClass).URL,
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

    // function scrollToVideo() {
    //   setLoadContent(loadBoolean);
    //   const container = document.querySelector("#elScrollVaInThisSite"),
    //     position = container.getBoundingClientRect();
    //   document.documentElement.style.scrollBehavior = "smooth";
    //   window.scrollTo(position.x, position.y);
    // }

    setCourseInProgress(true);
    updateClass();
    updateProgressBar();
    // scrollToVideo();
  }

  return (
    <Container>
      <Header />
      <ArrowBack route="/" />

      <MediaContainer>
        <HeaderMedia>
          <TitleCourse
            coursename={myCourses[courseid_params]?.name}
            classData={classData}
          />
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
          <span>Aquí se mostrará el proceso de este curso.</span>
        </TitleContent>

        <NameCourse>{myCourses[courseid_params]?.name}</NameCourse>

        <ListFollowingClasses>
          {myCourses[courseid_params]?.classes.map(item => (
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

// export default withAuthenticationRequired(MediaPlayer);
export default MediaPlayer;

const Container = styled.div`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    color: #f5f5f5;
    row-gap: 3em;
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
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 1024px) {
      flex-direction: column;
      row-gap: 1.3em;
      align-items: center;
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
