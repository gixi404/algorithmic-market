import { useState } from "react";
import Popup from "./Popup";
import { ArrowSVG } from "../../svgs";
import styled from "styled-components";

function PopupMyCourses() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <Container onClick={() => setPopupOpen(!popupOpen)}>
      <Title>Seguir Curso</Title>
      <ArrowSVG popupOpen={popupOpen} />
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
    cursor: pointer;
    padding-top: 1em;
  `,
  Title = styled.p`
    font-size: 1.1em;
    text-transform: capitalize;
    font-family: "Poppins", monospace;
    letter-spacing: 1px;
    font-weight: 400;
    color: #ff6700;
  `;
