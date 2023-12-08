import { useEffect, useState } from "react";
import { useMyContext } from "../Context.jsx";
import ErrorVideo from "./ErrorVideo.jsx";
import styled, { keyframes } from "styled-components";

function ClassVideo(props) {
  const { classURL, className } = props,
    { errorVideo, setErrorVideo } = useMyContext(),
    [videoData, setVideoData] = useState(null),
    [loadVideo, setLoadVideo] = useState(false);

  useEffect(() => {
    if (classURL) {
      setLoadVideo(true);
      fetch(classURL)
        .then(res => res.url)
        .then(url => setVideoData(url))
        .then(() => setLoadVideo(false))
        .catch(() => {
          setLoadVideo(false);
          setErrorVideo(true);
        });
    }
  }, [classURL]);

  if (errorVideo) return <ErrorVideo />;

  return loadVideo ? (
    <Loading />
  ) : (
    <Video
      src={videoData}
      allowFullScreen
      loading="lazy"
      title={`Clase: ${className}`}
    />
  );
}

export default ClassVideo;

const chargeVideo = keyframes`
  0% {
    background-color: rgba(191, 191, 191, 0.4);
  }

  50% {
    background-color: transparent;
  }

  100% {
    background-color: rgba(191, 191, 191, 0.4);
  }
`,
  Loading = styled.div`
    animation: ${chargeVideo} infinite 0.8s;
    width: 80vw;
    height: calc((9 / 16) * 80vw);
    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
    }
    @media (max-width: 576px) {
      width: 100vw;
      height: calc((9 / 16) * 100vw);
    }
  `,
  Video = styled.iframe`
    background-color: rgb(24, 24, 84);
    width: 80vw;
    height: calc((9 / 16) * 80vw);
    outline: 0;
    border: 0;
    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
    }
    @media (max-width: 576px) {
      width: 100vw;
      height: calc((9 / 16) * 100vw);
    }
  `;
