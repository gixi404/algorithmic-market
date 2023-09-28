import { useEffect, useState } from "react";
import { useMyContext } from "../Context";
import ErrorVideo from "./ErrorVideo";
import styled from "styled-components";

function ClassVideo(props) {
  const { classURL } = props;
  const { loadContent, setLoadContent, errorVideo, setErrorVideo } =
      useMyContext(),
    [videoData, setVideoData] = useState(null);

  useEffect(() => {
    let seconds = 0;
    const interval = setInterval(() => {
      if (seconds === 10 && loadContent) {
        setLoadContent(false);
        setErrorVideo(true);
      } else seconds++;
    }, 1000);
    return () => clearInterval(interval);
  }, [loadContent]);

  useEffect(() => {
    if (classURL) {
      setLoadContent(true);
      fetch(classURL)
        .then(response => response.url)
        .then(url => setVideoData(url))
        .catch(error => {
          console.error("Error en la carga del video: " + error.message);
          setLoadContent(false);
          setErrorVideo(true);
        });
    }
  }, [classURL]);

  return (
    <>
      {loadContent && <SkeletonContainer />}

      {!errorVideo ? (
        <Video
          src={videoData}
          style={{ display: loadContent ? "none" : "block" }}
          onLoad={() => setLoadContent(false)}
          frameBorder="0"
          allowFullScreen={true}
          allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          loading="lazy"
        />
      ) : (
        <ErrorVideo />
      )}
    </>
  );
}

export default ClassVideo;

const Video = styled.iframe`
    background-color: rgb(24, 24, 84);
    width: 80vw;
    height: calc((9 / 16) * 80vw);
    border: none;
    outline: none;
    border: 0;

    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
    }

    @media (max-width: 576px) {
      width: 100vw;
      height: calc((9 / 16) * 100vw);
    }
  `,
  SkeletonContainer = styled.div`
    border: none;
    outline: none;
    border-radius: 0;
    background-color: #444;
    width: 80vw;
    height: calc((9 / 16) * 80vw);
    animation-name: skeleton;
    animation-duration: 0.8s;
    animation-iteration-count: infinite;
    @keyframes skeleton {
      0% {
        background-color: rgb(24, 24, 84);
      }
      50% {
        background-color: rgba(255, 255, 255, 0.663);
      }
      100% {
        background-color: rgb(24, 24, 84);
      }
    }

    @media (max-width: 992px) {
      width: 90vw;
      height: calc((9 / 16) * 90vw);
    }

    @media (max-width: 576px) {
      width: 100vw;
      height: calc((9 / 16) * 100vw);
    }
  `;
