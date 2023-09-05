import styled from "styled-components";

function ClassVideo(props) {
  const { classData } = props;

  return (
    <Video src={classData.classURL} frameBorder="0" allowFullScreen={true} />
  );
}

export default ClassVideo;

const Video = styled.iframe`
  background-color: rgb(24, 24, 84);
  width: 80vw;
  height: calc((9 / 16) * 80vw);

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
