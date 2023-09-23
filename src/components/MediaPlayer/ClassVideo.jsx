import { useEffect } from "react";
import { useMyContext } from "../Context";
import ErrorVideo from "./ErrorVideo";
import styled from "styled-components";

function ClassVideo(props) {
  const { classData } = props,
    { loadContent, setLoadContent, errorVideo, setErrorVideo } = useMyContext();

  useEffect(() => {
    //* Detecta si el loadContent carga por 10 segundos consecutivos.
    let seconds = 0;
    const interval = setInterval(() => {
      if (seconds === 10 && loadContent) {
        setLoadContent(false);
        setErrorVideo(true);
      } else seconds++;
    }, 1000);
    return () => clearInterval(interval);
  }, [loadContent]);

  return (
    <>
      {loadContent && <SkeletonContainer />}

      {!errorVideo ? (
        <Video
          src={classData.classURL}
          frameBorder="0"
          allowFullScreen={true}
          style={{ display: loadContent ? "none" : "block" }}
          onLoad={() => setLoadContent(false)}
          onLoadStart={() => setLoadContent(false)}
          onError={() => setErrorVideo(true)}
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
    border-radius: 0.8rem;
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
        background-color: rgba(255, 255, 255, 0.7);
      }
      100% {
        background-color: rgb(24, 24, 84);
      }
    }

    @media (max-width: 992px) {
      width: 90vw;
    }

    @media (max-width: 576px) {
      width: 100vw;
    }

    @media (max-width: 992px) {
      height: calc((9 / 16) * 90vw);
    }

    @media (max-width: 576px) {
      height: calc((9 / 16) * 100vw);
    }
  `;
