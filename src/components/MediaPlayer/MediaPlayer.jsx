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
import styled from "styled-components";

function MediaPlayer() {
  const { courseid: courseid_params } = useParams();

  // Use an object to store progress and numberClass for each course
  const [courseData, setCourseData] = useState({
    [courseid_params]: {
      progressValue: 11.11,
      numberClass: 0,
    },
  });

  const { myCourses, loadContent, setLoadContent, setErrorVideo } =
    useMyContext();

  const lastClass = Number(myCourses[courseid_params].classes.length) - 1 ?? 0;

  useEffect(() => {
    function selectCourse() {
      // Use the course-specific data from courseData
      const { progressValue, numberClass } = courseData[courseid_params];
      setClassData({
        classId: direction(courseid_params, numberClass).id,
        className: direction(courseid_params, numberClass).name,
        classURL: direction(courseid_params, numberClass).URL,
      });
      setProgressValue(progressValue);
      setNumberClass(numberClass);
    }
    return () => selectCourse();
  }, [courseid_params]);

  useEffect(() => {
    // Update localStorage for the specific course
    localStorage.setItem(
      `progress:${courseid_params}`,
      courseData[courseid_params].progressValue
    );
  }, [courseData, courseid_params]);

  function previousClass() {
    if (numberClass > 0) {
      const updatedCourseData = { ...courseData };
      const newNumberClass = numberClass - 1;
      const updatedProgressValue =
        updatedCourseData[courseid_params].progressValue - 11.11;

      updatedCourseData[courseid_params] = {
        progressValue: updatedProgressValue,
        numberClass: newNumberClass,
      };

      setErrorVideo(false);
      setCourseInProgress(true);
      setCourseData(updatedCourseData);
    }
  }

  function nextClass() {
    if (numberClass < lastClass) {
      const updatedCourseData = { ...courseData };
      const newNumberClass = numberClass + 1;
      const updatedProgressValue =
        updatedCourseData[courseid_params].progressValue + 11.11;

      updatedCourseData[courseid_params] = {
        progressValue: updatedProgressValue,
        numberClass: newNumberClass,
      };

      setErrorVideo(false);
      setCourseInProgress(true);
      setCourseData(updatedCourseData);
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
          <ProgressBar progressValue={progressValue} />
        </HeaderMedia>

        {courseInProgress ? (
          <ClassVideo
            classURL={classData.classURL}
            loadContent={loadContent}
            setLoadContent={setLoadContent}
          />
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

export default MediaPlayer;

// export default withAuthenticationRequired(MediaPlayer);

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
      margin_bottom: 1em;
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
