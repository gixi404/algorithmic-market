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
      <Button>
        <Link to="/mycourses">Back</Link>
      </Button>
      <MediaContainer>
        <Reproductor>
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

              <h2>{"You're watching: " + classData.className}</h2>
            </>
          ) : (
            <p>Select the class to see</p>
          )}
        </Reproductor>
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
  background-image: linear-gradient(
  to bottom,
  #051937,
  #121e3a,
  #1b233c,
  #23283f,
  #2b2d42
);
  width: 100vw;
  height: 140vh;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  justify-content: space-between;
  color: #F5F5F5;
`;
const Button = styled.div`
    margin: 1vh 0 0 1vw;
    display: inline;
    padding: 1vh;
    background-color: #C0C0C0;
    transition: all .5s ease;
    &:hover{
      background-color: #181818;
      a{  
      color: #F5F5F5;
      }
    }
    &:active{
      background-color: #5c5c5c;
    }
    a{
      color: #202020;
      text-decoration: none;
    }
`
const MediaContainer = styled.div`
  width: 100vw;
  height: 130vh;
  margin:0 ;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
  overflow: auto;
`;
const Reproductor = styled.section`
  width: 90vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  video{
    height: 80vh;
    box-shadow: 0 0 10px #181818;
    border: 0;
  }
  h2{
    color: #c0c0c0;
  }
`;

const FollowingClasses = styled.div`
  height: min-content;
  width: 90vw;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: space-between;
`;

const Class = styled.article`
  width: 90vw;
  border: 0;
  border-radius: 8px;
  margin: 1.5vh 0;
  padding: 2vh 0;
  box-shadow: 0 0 1vh #181818;
  background-color: #3a4c82;
  cursor: pointer;
`;
