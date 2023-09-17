import { useContext } from "react";
import { ContextProps } from "../../Context";
import { VisitSVG } from "../../svgs";
import styled from "styled-components";

function Course(props) {
  const { isMobile = false } = props,
    { progressValue, courseID, idToName } = useContext(ContextProps);

  function verifyData(isTrue, isFalse = null) {
    return courseID !== null ? isTrue : isFalse;
  }

  if (isMobile) {
    return (
      <ContainerMobile>
        <Name>{idToName(courseID)}</Name>

        <progress
          style={{ width: "80%", height: "3vh" }}
          value={verifyData(
            Math.ceil(progressValue === 101 ? progressValue-- : progressValue),
            0
          )}
          max="100"
          name="progress"
        />

        <DivMobile>
          <label htmlFor="progress">
            Progreso{" "}
            {verifyData(
              Math.ceil(
                progressValue === 101 ? progressValue-- : progressValue
              ),
              0
            )}
            %
          </label>
          {verifyData(<VisitSVG />)}
        </DivMobile>
      </ContainerMobile>
    );
  }

  return (
    <Container>
      <Name>{idToName(courseID)}</Name>

      <progress
        style={{ width: "80%", height: "3vh" }}
        value={verifyData(
          Math.ceil(progressValue === 101 ? progressValue-- : progressValue),
          0
        )}
        max="100"
        name="progress"
      />

      <Div>
        <label htmlFor="progress">
          Progreso{" "}
          {verifyData(
            Math.ceil(progressValue === 101 ? progressValue-- : progressValue),
            0
          )}
          %
        </label>
        {verifyData(<VisitSVG />)}
      </Div>
    </Container>
  );
}

export default Course;

const ContainerMobile = styled.div`
    border-radius: 0.5em;
    /* background: rgba(255, 159, 96, 0.3); */
    width: 100vw;
    height: 13vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    font-family: "Poppins", monospace;
    row-gap: 0.2em;
  `,
  DivMobile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #000;
  `;

const Container = styled.article`
    border-radius: 0.5em;
    background: rgba(255, 159, 96, 0.3);
    width: 85%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0.3em 0;
    font-family: "Poppins", monospace;
    row-gap: 0.2em;
  `,
  Name = styled.p`
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: black;
    width: 80%;
    text-align: center;
    font-weight: 400;
    text-align: start;
  `,
  Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 80%;
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #000;
  `;
