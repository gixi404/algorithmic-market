import { useState } from "react";
import ArrowSVG from "./ArrowSVG";
import Popup from "./Popup";
import styled from "styled-components";

function PopupMyCourses() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <Container>
      <Title>Seguir Curso</Title>
      <ArrowSVG popupOpen={popupOpen} setPopupOpen={setPopupOpen} />
      {popupOpen && <Popup />}
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
  `,
  Title = styled.p`
    font-size: 1.1em;
    text-transform: capitalize;
    font-family: "Poppins", monospace;
    letter-spacing: 1px;
    font-weight: 400;
    color: #ff6700;
  `;
