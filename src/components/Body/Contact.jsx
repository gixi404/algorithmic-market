import { Link } from "react-router-dom";
import styled from "styled-components";

function Contact() {
  return (
    <Container>
      <ContactContainer id="contact">
        <Link to="/">Atrás</Link>
        <p>Contáctanos</p>
        <div>
          <p>eltrading@gmail.com</p>
          <p>234 534 1235</p>
        </div>

        <Form>
          <div>
            <label>Nombre: </label> <input />{" "}
          </div>
          <div>
            <label>Teléfono: </label> <input />
          </div>
          <div>
            <label>Email: </label> <input />
          </div>
          <div>
            <label>Mensaje: </label> <input />
          </div>
          <button type="submit">Enviar</button>
        </Form>
      </ContactContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
  width: 70%;
  height: 400px;
  background-color: red;
  margin: 0 auto;
  padding: 1rem;
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
  border-radius: 8px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1rem;
`;
