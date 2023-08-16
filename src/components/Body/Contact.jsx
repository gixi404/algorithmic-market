import { Link } from "react-router-dom";
import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <ContactContainer id="contact">

      </ContactContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 100vw;
  height: 70vh;
  margin: 0 auto;
`;

const ContactContainer = styled.div`
  background-color: #457b9d;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 2rem;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;
