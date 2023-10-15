import { useEffect, useState } from "react";
import { useMyContext } from "../Context";
import ErrorVideo from "./ErrorVideo";
import styled from "styled-components";

function ClassVideo(props) {
  const { classURL } = props,
    { errorVideo, setErrorVideo } = useMyContext(),
    [videoData, setVideoData] = useState(null);

  useEffect(() => {
    if (classURL) {
      fetch(classURL)
        .then(res => res.url)
        .then(url => setVideoData(url))
        .catch(() => setErrorVideo(true));
    }
  }, [classURL]);

  //*16/9 aspectratio de yt

  return (
    <>
      {!errorVideo ? (
        <Video
          src={videoData}
          frameBorder="0"
          allowFullScreen
          allow="autoplay;encrypted-media;picture-in-picture;"
          // testear los necesarios allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
          loading="lazy"
          title={`Clase: ${classURL.name}`}
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
