import { ArrowSVG } from "../../svgs";
import styled from "styled-components";

function PopupMyCourses(props) {
  const { openCourse, setOpenCourse, setOpenProfile } = props;

  return (
    <Container
      onClick={() => {
        setOpenProfile(false);
        setOpenCourse(!openCourse);
      }}
    >
      <Title>Seguir Curso</Title>
      <ArrowSVG openCourse={openCourse} />
    </Container>
  );
}

export default PopupMyCourses;

const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 0.8em;
    cursor: pointer;
  `,
  Title = styled.p`
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    text-transform: capitalize;
    font-family: "Poppins", monospace;
    letter-spacing: 1px;
    font-weight: 400;
    color: #ff6700;
  `;
