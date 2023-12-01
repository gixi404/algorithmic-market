import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { withAuthenticationRequired, useAuth0 } from "@auth0/auth0-react";
import { useMyContext } from "../Context.jsx";
import Header from "../Body/Header/Header.jsx";
import Footer from "../Body/Footer.jsx";
import ProgressBar from "./ProgressBar.jsx";
import TitleCourse from "./TitleCourse.jsx";
import ClassVideo from "./ClassVideo.jsx";
import ControlsVideo from "./ControlsVideo.jsx";
import FinishCourse from "./FinishCourse.jsx";
import ItemClass from "./ItemClass.jsx";
import ContinueCourse from "./ContinueCourse.jsx";
import { ArrowBack } from "../svgs.jsx";
import { PROGRESS_VALUE } from "../../utils/consts.js";
import styled from "styled-components";

function MediaPlayer() {
  const { courseid: courseid_params } = useParams(),
    { user } = useAuth0(),
    //* esta const debe ser igual a la cantidad de cursos disponibles.
    initialProgressValue = Array(3).fill(PROGRESS_VALUE);

  (function getStoredProgress() {
    const storedProgress = localStorage.getItem(
      `${user.email}-progress:${courseid_params}`
    );
    if (storedProgress !== null) {
      initialProgressValue[courseid_params] = Number(storedProgress);
    }
  })();

  const { setErrorVideo, myCourses } = useMyContext(),
    [classData, setClassData] = useState({}),
    [numberClass, setNumberClass] = useState(0),
    [courseInProgress, setCourseInProgress] = useState(true),
    [progressValue, setProgressValue] = useState(initialProgressValue),
    [continueCourse, setContinueCourse] = useState(true),
    lastClass = Number(myCourses[courseid_params]?.clases?.length) - 1 ?? 0;

  useEffect(() => {
    const getClass = localStorage.getItem(
      `${user.email}-class:${courseid_params}`
    );
    setClassData(JSON.parse(getClass));
  }, [courseid_params]);

  useEffect(() => {
    const updateClass = {
        classId: direction(courseid_params, numberClass).id,
        className: direction(courseid_params, numberClass).name,
        classURL: direction(courseid_params, numberClass).URL,
      },
      saveClass = localStorage.setItem(
        `${user.email}-class:${courseid_params}`,
        JSON.stringify(updateClass)
      );
    setClassData(updateClass);
    return () => saveClass;
  }, [numberClass]);

  useEffect(() => {
    const saveProgress = localStorage.setItem(
      `${user.email}-progress:${courseid_params}`,
      progressValue[courseid_params]
    );
    const lastClassVisited =
      Math.ceil(progressValue[courseid_params].toString().charAt(0)) - 1;

    setNumberClass(lastClassVisited);
    return () => saveProgress;
  }, [progressValue]);

  function direction(numberCourse, numberClass = 0) {
    return myCourses[numberCourse].clases[numberClass];
  }

  function previousClass() {
    if (numberClass > 0) {
      const updatedProgressValue = [...progressValue],
        newNumberClass = numberClass - 1,
        previousClassData = {
          classId: direction(courseid_params, newNumberClass).id,
          className: direction(courseid_params, newNumberClass).name,
          classURL: direction(courseid_params, newNumberClass).URL,
        };

      updatedProgressValue[courseid_params] = Math.ceil(
        updatedProgressValue[courseid_params] - PROGRESS_VALUE
      );
      setErrorVideo(false);
      setCourseInProgress(true);
      setNumberClass(newNumberClass);
      setClassData(previousClassData);
      setProgressValue(updatedProgressValue);
    }
  }

  function nextClass() {
    if (numberClass < lastClass) {
      const updatedProgressValue = [...progressValue],
        newNumberClass = numberClass + 1,
        nextClassData = {
          classId: direction(courseid_params, newNumberClass).id,
          className: direction(courseid_params, newNumberClass).name,
          classURL: direction(courseid_params, newNumberClass).URL,
        };

      updatedProgressValue[courseid_params] = Math.ceil(
        updatedProgressValue[courseid_params] + PROGRESS_VALUE
      );
      setErrorVideo(false);
      setCourseInProgress(true);
      setNumberClass(newNumberClass);
      setClassData(nextClassData);
      setProgressValue(updatedProgressValue);
    }
  }

  function selectClassManually(classId) {
    classId = Number(classId);

    function updateClass() {
      if (numberClass !== classId) {
        const classSelected = myCourses[courseid_params]?.clases.find(
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
      const updatedProgressValue = [...progressValue];
      let newProgress = Math.ceil(PROGRESS_VALUE * classId);
      newProgress = newProgress === 101 ? newProgress-- : newProgress;
      updatedProgressValue[courseid_params] = newProgress;
      setProgressValue(updatedProgressValue);
    }

    setErrorVideo(false);
    setCourseInProgress(true);
    updateClass();
    updateProgressBar();
  }

  return (
    <Container>
      <Header />
      <ArrowBack route="/" />

      <MediaContainer>
        <HeaderMedia>
          <TitleCourse
            coursename={myCourses[courseid_params]?.name}
            className={classData.className}
          />
          <ProgressBar progressValue={progressValue[courseid_params]} />
        </HeaderMedia>

        {courseInProgress ? (
          continueCourse ? (
            <ContinueCourse setContinueCourse={setContinueCourse} />
          ) : (
            <ClassVideo
              classURL={classData.classURL}
              className={classData.className}
            />
          )
        ) : (
          <FinishCourse />
        )}

        <ControlsVideo
          courseid_params={courseid_params}
          numberClass={numberClass}
          lastClass={lastClass}
          nextClass={nextClass}
          previousClass={previousClass}
          courseInProgress={courseInProgress}
          setCourseInProgress={setCourseInProgress}
        />
      </MediaContainer>

      <ContentContainer>
        <TitleContent>
          Contenido
          <span>Visualiza el proceso de este curso.</span>
        </TitleContent>

        <NameCourse>{myCourses[courseid_params]?.name}</NameCourse>

        <ListFollowingClasses>
          {myCourses[courseid_params]?.clases?.map(item => (
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
    row-gap: 3em;
  `,
  MediaContainer = styled.section`
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
  ListFollowingClasses = styled.ol`
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
