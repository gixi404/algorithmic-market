import { useContext, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../Context";
import Footer from "../Body/Footer";
import styled from "styled-components";

function MediaPlayer() {
  const { myCourses } = useContext(ContextProps);
  const { courseId } = useParams();

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

  return (
    <Container>
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
      </Sexo>

      <Footer />
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
`;

const BackBtn = styled.div`
  margin: 1rem 0;
  display: inline;
  padding: 1vh;
  background-color: #c0c0c0;
  border-radius: 8px;
  transition: all 1s ease;
  &:hover {
    background-color: #181818;
    transform: rotate(360deg);
    a {
      color: #f5f5f5;
    }
  }
  &:active {
    background-color: #5c5c5c;
  }
  a {
    color: #202020;
    text-decoration: none;
  }
`;

const Sexo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 800px;
  margin-bottom: 3rem;
`;

const MediaContainer = styled.div`
  width: 70vw;
  height: 120vh;
  margin: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
`;

const Reproductor = styled.section`
  width: 70vw;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  row-gap: 1rem;
  video {
    height: 80vh;
    box-shadow: 0 0 10px #181818;
    border: 0;
  }
  h2 {
    color: #c0c0c0;
  }
`;

const TextLevelCourse = styled.p`
  font-size: 2.3rem;
  font-family: "Poppins", monospace;
  font-weight: 500;
  color: #ebebeb;
  width: 100%;
  text-align: start;
`;
const Video = styled.video`
  width: 100%;
  height: 100%;
`;
const FollowingClasses = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1rem;
`;

const MuerteALosGays = styled.span`
  font-size: 1.8rem;
  font-family: "Poppins", monospace;
  font-weight: 500;
  color: #ebebeb;
`;

const Class = styled.article`
  width: 70vw;
  border-radius: 8px;
  padding: 2vh 0;
  background-color: #3a4c82;
  cursor: pointer;
  text-align: center;
`;
