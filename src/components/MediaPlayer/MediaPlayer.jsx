import { useContext, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../Context";
import Footer from "../Footer";
import styled from "styled-components";

function MediaPlayer() {
  const { myCourses } = useContext(ContextProps);
  const { courseId } = useParams();

  const formatCourseId = courseId.slice(0, 1);

  const [classData, setClassData] = useState("");

  function handleChangeURL(classId) {
    setClassData({
      classId: myCourses[formatCourseId].classes[classId].id,
      className: myCourses[formatCourseId].classes[classId].name,
      classURL: myCourses[formatCourseId].classes[classId].URL,
    });
  }

  return (
    <Container>
      <Link to="/mycourses">Atrás</Link>

      <MediaContainer>
        <div style={{ width: "95%", aspectRatio: "16/9" }}>
          <h2>{myCourses[formatCourseId].name}</h2>
          {classData ? (
            <>
              <video
                src={classData.classURL}
                loop={false}
                autoPlay
                playsInline
                controls
                width="100%"
                height="300px"
              />

              <h2>{"Estás viendo: " + classData.className}</h2>
            </>
          ) : (
            <p>Selecciona la clase para ver</p>
          )}
        </div>
        <FollowingClasses>
          {myCourses[formatCourseId].classes.map(_class => (
            <Class key={_class.id} onClick={() => handleChangeURL(_class.id)}>
              {_class.name}
            </Class>
          ))}
        </FollowingClasses>
      </MediaContainer>
      <Footer />
    </Container>
  );
}

export default withAuthenticationRequired(MediaPlayer);

const Container = styled.div`
  background-color: #457b9d;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const MediaContainer = styled.div`
  background-color: #457b9d;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FollowingClasses = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 95%;
  margin-top: 2rem;
  row-gap: 0.2rem;
`;

const Class = styled.div`
  background-color: gray;
  width: 100%;
  height: 40px;
  border: 1px solid black;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  color: #fff;
`;

/*
ESLINT
"eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },

  <ReactPlayer
                url={classData.classURL}
                playing={true}
                loop={false}
                light={false}
                volume={1}
                playbackRate={1}
                progressInterval={1}
                playsInline
                stopOnUnmount={false}
                pip
                controls={false}
                width="100%"
                height="300px"
              />
*/
