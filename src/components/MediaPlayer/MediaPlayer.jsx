import { useContext, useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { ContextProps } from "../Context";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import Footer from "../Footer";
import styled from "styled-components";

function MediaPlayer() {
  const { myCourses } = useContext(ContextProps);
  const [classData, setClassData] = useState({
    classId: myCourses[0].classes[0].id,
    className: myCourses[0].classes[0].name,
    classURL: myCourses[0].classes[0].URL,
  });

  function handleChangeURL(classId) {
    setClassData({
      classId: myCourses[0].classes[classId].id,
      className: myCourses[0].classes[classId].name,
      classURL: myCourses[0].classes[classId].URL,
    });
  }

  return (
    <Container>
      <Link to="/mycourses">Atrás</Link>

      <MediaContainer>
        <div style={{ width: "95%", aspectRatio: "16/9" }}>
          <h2>{myCourses[0].name}</h2>
          <ReactPlayer
            url={classData.classURL}
            playing={true}
            loop={false}
            light={false}
            volume={0}
            playbackRate={1}
            progressInterval={1}
            playsInline
            stopOnUnmount={false}
            pip
            controls
            width="100%"
            height="300px"
          />
          <h2>{"Estás viendo: " + classData.className}</h2>
        </div>
        <FollowingClasses>
          {myCourses[0].classes.map(_class => (
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
