import { useState, useEffect } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useParams } from "react-router-dom";
import { useMyContext } from "../Context";
import Header from "../Body/Header/Header";
import Footer from "../Body/Footer";
import ProgressBar from "./ProgressBar";
import TitleCourse from "./TitleCourse";
import ClassVideo from "./ClassVideo";
import ControlsVideo from "./ControlsVideo";
import FinishCourse from "./FinishCourse";
import ItemClass from "./ItemClass";
import { ArrowBack } from "../svgs";
import ContinueCourse from "./ContinueCourse";
import styled from "styled-components";

function MediaPlayer() {
  const { courseid: courseid_params } = useParams(),
    initialProgressValue = Array(3).fill(11.11);

  (function getStoredProgress() {
    const storedProgress = localStorage.getItem(`progress:${courseid_params}`);
    if (storedProgress !== null) {
      initialProgressValue[courseid_params] = Number(storedProgress);
    }
  })();

  const { myCourses, loadContent, setLoadContent, setErrorVideo } =
      useMyContext(),
    [classData, setClassData] = useState({}),
    [numberClass, setNumberClass] = useState(0),
    [courseInProgress, setCourseInProgress] = useState(true),
    [progressValue, setProgressValue] = useState(initialProgressValue),
    [continueCourse, setContinueCourse] = useState(true),
    lastClass = Number(myCourses[courseid_params].classes.length) - 1 ?? 0;

  useEffect(() => {
    function selectCourse() {
      setClassData({
        classId: direction(courseid_params, numberClass).id,
        className: direction(courseid_params, numberClass).name,
        classURL: direction(courseid_params, numberClass).URL,
      });
    }
    return () => selectCourse();
  }, [courseid_params]);

  useEffect(() => {
    const setItem = localStorage.setItem(
      `progress:${courseid_params}`,
      progressValue[courseid_params]
    );
    return () => setItem;
  }, [progressValue]);

  useEffect(() => {
    const lastClassVisited =
        Math.floor(progressValue[courseid_params].toString().charAt(1)) - 1 ===
        -1
          ? 9
          : Math.floor(progressValue[courseid_params].toString().charAt(0)) - 1,
      updatedClass = {
        classId: direction(courseid_params, lastClassVisited).id,
        className: direction(courseid_params, lastClassVisited).name,
        classURL: direction(courseid_params, lastClassVisited).URL,
      };

    setNumberClass(lastClassVisited);
    setClassData(updatedClass);
  }, [courseid_params, progressValue]);

  function direction(numberCourse, numberClass = 0) {
    return myCourses[numberCourse]?.classes[numberClass];
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

      updatedProgressValue[courseid_params] -= 11.11;
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

      updatedProgressValue[courseid_params] += 11.11;
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
      const updatedProgressValue = [...progressValue];
      let newProgress = Math.ceil(11.11 * classId);
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
              loadContent={loadContent}
              setLoadContent={setLoadContent}
            />
          )
        ) : (
          <FinishCourse setLoadContent={setLoadContent} />
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

export default withAuthenticationRequired(MediaPlayer);

const Container = styled.main`
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
