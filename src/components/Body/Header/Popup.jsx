import { useMyContext } from "../../Context";
import { VisitSVG } from "../../svgs";
import styled from "styled-components";

function PopupProgressBar(props) {
  const { IS_MOBILE = false } = props,
    { idToName, courseID, progressValue } = useMyContext();

  function verifyData(isTrue, isFalse = null) {
    return courseID !== null ? isTrue : isFalse;
  }

  if (IS_MOBILE) {
    return (
      <ContainerMobile>
        <NameMobile>{idToName(courseID)}</NameMobile>

        <progress
          style={{
            width: "70vw",
            height: "3vh",
          }}
          value={verifyData(
            Math.ceil(progressValue === 101 ? progressValue-- : progressValue),
            0
          )}
          max="100"
          name="progress"
        />

        <DivMobile>
          <label
            style={{
              fontFamily: "Poppins",
              fontSize:
                "calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)))",
            }}
            htmlFor="progress"
          >
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
      <ContainerPop>
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
              Math.ceil(
                progressValue === 101 ? progressValue-- : progressValue
              ),
              0
            )}
            %
          </label>
          {verifyData(<VisitSVG />)}
        </Div>
      </ContainerPop>
    </Container>
  );
}

export default PopupProgressBar;

const Container = styled.section`
    width: 280px;
    height: 90px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 1em;
    border-radius: 0.8em;
  `,
  ContainerPop = styled.article`
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
    font-size: calc(11px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: black;
    font-family: "Poppins", monospace;

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
    font-size: calc(10px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #000;
  `;

const ContainerMobile = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    row-gap: 0.2em;
    /* border-top: 2px solid #ff6700; */
    border-bottom: 2px solid #ff6700;
    padding: 0.5em 0;
  `,
  NameMobile = styled.p`
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #000;
    font-family: "Poppins", monospace;

    width: 70vw;
    font-weight: 400;
    text-align: start;
  `,
  DivMobile = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 70vw;
    color: #000;
  `;
