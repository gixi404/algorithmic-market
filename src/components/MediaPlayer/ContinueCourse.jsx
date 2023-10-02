import styled from "styled-components";

function ContinueCourse(props) {
  const { setContinueCourse } = props;

  return (
    <Letter>
      Continúa donde te quedaste
      <button onClick={() => setContinueCourse(false)}>Continúa</button>
    </Letter>
  );
}

export default ContinueCourse;

const Letter = styled.div`
  background-color: rgb(202, 202, 202);
  width: 80vw;
  height: calc((9 / 16) * 80vw);
  outline: 0;
  border: 0;
  color: #000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 992px) {
    width: 90vw;
    height: calc((9 / 16) * 90vw);
  }
  @media (max-width: 576px) {
    width: 100vw;
    height: calc((9 / 16) * 100vw);
  }
`;
