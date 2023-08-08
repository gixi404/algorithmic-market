import { useState } from "react";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import ReactLoading from "react-loading";
import Footer from "../Footer";
import styled from "styled-components";

function MediaPlayer() {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <Container>
      <Link to="/mycourses">Atrás</Link>

      {!videoLoaded && (
        <ReactLoading
          type="spin"
          color="rgb(193, 163, 98)"
          width="150px"
          height="150px"
        />
      )}
      <MediaContainer>
        <div style={{ width: "95%", aspectRatio: "16/9" }}>
          <ReactPlayer
            url="https://www.youtube.com/watch?v=uHr8QMvHqWM"
            playing={false}
            loop={false}
            light={false}
            volume={0.3}
            playbackRate={1}
            progressInterval={1}
            playsInline
            stopOnUnmount={false}
            pip
            controls
            width="100%"
            height="300px"
            onReady={() => setVideoLoaded(true)}
          />
        </div>
        <FollowingClasses>
          <Class>Sou la clase número 2</Class>
          <Class>Sou la clase número 3</Class>
          <Class>Sou la clase número 4</Class>
          <Class>Sou la clase número 5</Class>
          <Class>Sou la clase número 6</Class>
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
