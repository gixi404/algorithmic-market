import { useContext, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../Context";
import Header from "../Body/Header";
import Footer from "../Body/Footer";
import styled from "styled-components";

function MediaPlayer() {
  let progressCourse = 25;

  const ProgressSVG = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="346"
      height="16"
      viewBox="0 0 346 16"
      fill="none"
      color="#FF6700"
    >
      <path
        d="M8 8L338 8.00003"
        stroke="#f2a470"
        strokeWidth="15"
        strokeLinecap="round"
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="120"
        height="16"
        viewBox="0 0 120 16"
        fill="none"
      >
        <path
          d="M8 8H112"
          stroke="#FF6700"
          strokeWidth="15"
          strokeLinecap="round"
        />
      </svg>
    </svg>
  );

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

      <MediaContainer>
        <HeaderMedia>
          <TitleCourse>
            Course Initial
            <span>Unit 2.1 Derivatives Trading</span>
          </TitleCourse>

          <ProgressContainer>
            <ProgressSVG name="progress-course" max="100" value="25" />
            <LabelBar htmlFor="progress-course">
              Progress {progressCourse}%
            </LabelBar>
          </ProgressContainer>
        </HeaderMedia>

        <Video
          src="https://www.youtube.com/embed/9Wc-WVV9Jdw"
          frameBorder="0"
          allowFullScreen={true}
        />

        <Controls>
          <ControlBtn>Previous Class</ControlBtn>
          <ControlBtn>Next Class</ControlBtn>
        </Controls>
      </MediaContainer>

      <ContentContainer>
        <TitleContent>
          Content
          <span>Here the process and content of this course will be shown</span>
        </TitleContent>

        <NameCourse>Premier Course: Mastering the Markets</NameCourse>

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
              <FirstClass>Unit 1: Advanced Technical Analysis</FirstClass>
            </div>
            <FollowingClasses>
              <span>1.1. Introduction to Advanced Technical Analysis</span>
              <span>1.2. Oscillators and Momentum Indicators</span>
              <span>1.3. Advanced Technical Analysis Strategies</span>
            </FollowingClasses>
          </Article>

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
              <FirstClass>Unit 1: Advanced Technical Analysis</FirstClass>
            </div>
            <FollowingClasses>
              <span>1.1. Introduction to Advanced Technical Analysis</span>
              <span>1.2. Oscillators and Momentum Indicators</span>
              <span>1.3. Advanced Technical Analysis Strategies</span>
            </FollowingClasses>
          </Article>

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
              <FirstClass>Unit 1: Advanced Technical Analysis</FirstClass>
            </div>
            <FollowingClasses>
              <span>1.1. Introduction to Advanced Technical Analysis</span>
              <span>1.2. Oscillators and Momentum Indicators</span>
              <span>1.3. Advanced Technical Analysis Strategies</span>
            </FollowingClasses>
          </Article>
        </Themes>
        <Footer />
      </ContentContainer>
    </Container>
  );
}

export default MediaPlayer;
// export default withAuthenticationRequired(MediaPlayer);

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

    @media (max-width: 480px) {
      width: 100vw;
    }
  `,
  HeaderMedia = styled.header`
    display: flex;
    flex-direction: row;
    align-items: end;
    justify-content: space-between;
    width: 100%;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: center;
      row-gap: 1.5rem;
    }
  `,
  TitleCourse = styled.p`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    font-size: 2rem;

    span {
      color: #939393;
      font-size: 1.2rem;
    }
  `,
  ProgressContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    column-gap: 1.3rem;

    @media (max-width: 480px) {
      flex-direction: column-reverse;
      align-items: start;
      row-gap: 0.5rem;
    }
  `,
  LabelBar = styled.label`
    font-family: "Poppins", sans-serif;
    font-size: 1.3rem;
    font-weight: 300;
  `,
  Video = styled.iframe`
    width: 99.3%;
    height: 62vh;
    background-color: rgb(24, 24, 84);

    @media (max-width: 480px) {
      width: 100vw;
      height: 26vh;
    }
  `,
  Controls = styled.div`
    display: flex;
    flex-direction: row;
    width: 99.2%;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
      width: 95vw;
      flex-direction: row;
      column-gap: 1rem;
    }
  `,
  ControlBtn = styled.button`
    display: flex;
    width: 27.1875vw;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 12px;
    border: 2px solid #ff6700;
    background-color: transparent;
    outline: none;
    color: #ff6700;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(1.05);
      cursor: pointer;
    }

    @media (max-width: 480px) {
      width: 45vw;
      font-size: 1rem;
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

    @media (max-width: 480px) {
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

    @media (max-width: 480px) {
      row-gap: 1rem;
    }
  `,
  Article = styled.article`
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: end;
    justify-content: center;

    @media (max-width: 480px) {
      width: 100vw;
      align-items: center;
    }
  `,
  FirstClass = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.2rem;
    color: #000000;

    @media (max-width: 480px) {
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

    @media (max-width: 480px) {
      font-size: 1rem;
      width: 58%;
    }
  `;

// const { myCourses } = useContext(ContextProps);
// const { coursename } = useParams();

// const formatCourseId = courseId.slice(0, 1);

// const [classData, setClassData] = useState({
//   classId: myCourses[0].classes[0].id,
//   className: myCourses[0].classes[0].name,
//   classURL: myCourses[0].classes[0].URL,
// });

// function handleChangeURL(classId) {
//   setClassData({
//     classId: myCourses[formatCourseId].classes[classId].id,
//     className: myCourses[formatCourseId].classes[classId].name,
//     classURL: myCourses[formatCourseId].classes[classId].URL,
//   });
// }

/* <BackBtn>
        <Link to="/mycourses">Back</Link>
      </BackBtn> */
/* <Sexo>
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
