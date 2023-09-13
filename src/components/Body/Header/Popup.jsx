import Course from "./Course";
import styled from "styled-components";

function Popup() {
  return (
    <Container>
      <Course />
    </Container>
  );
}

export default Popup;

const Container = styled.section`
  position: absolute;
  width: 250px;
  height: auto;
  top: 95px;
  left: 70vw;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  border-radius: 0 0 0.8em 0.8em;
  padding-bottom: 1em;
`;
