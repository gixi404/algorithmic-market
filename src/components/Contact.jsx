import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer id="contact">
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
  );
}

export default Contact;

const ContactContainer = styled.div`
  background-color: #457b9d;
  width: 70%;
  height: 380px;
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
