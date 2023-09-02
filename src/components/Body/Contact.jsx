import { useState } from "react";
import styled from "styled-components";

function Contact() {
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [sendForm, setSendForm] = useState(false);

  function handleSubmitForm() {
    const name_form = document.getElementById("name_form");
    const mail_form = document.getElementById("mail_form");
    const query_form = document.getElementById("query_form");

    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    const regexQuery = /^(.{1,800})$/;

    if (name === "") {
      name_form.style.borderBottom = "none";
      name_form.style.outline = "2.3px solid red";
      setError(true);

      setTimeout(() => {
        name_form.style.outline = "none";
        name_form.style.borderBottom = "2.3px solid #ff6700";
        setError(false);
      }, 3000);
    } else if (!regexMail.test(mail) || mail === "") {
      mail_form.style.borderBottom = "none";
      mail_form.style.outline = "2.3px solid red";
      setError(true);

      setTimeout(() => {
        mail_form.style.outline = "none";
        mail_form.style.borderBottom = "2.3px solid #ff6700";
        setError(false);
      }, 3000);
    } else if (!regexQuery.test(query) || query === "") {
      query_form.style.borderBottom = "none";
      query_form.style.outline = "2.3px solid red";
      setError(true);

      setTimeout(() => {
        query_form.style.outline = "none";
        query_form.style.borderBottom = "2.3px solid #ff6700";
        setError(false);
      }, 3000);
    } else {
      setSendForm(true);
      setTimeout(() => setSendForm(false), 3000);
    }
  }

  return (
    <Container id="contact">
      <ContactContainer>
        <Text>
          <Title>
            Contact us
            <TitleSpan>
              We're Here to Listen and Help. Send your doubts or queries!
            </TitleSpan>
          </Title>
        </Text>

        <Form
          onSubmit={handleSubmitForm}
          action="http://localhost:3001/form"
          method="post"
        >
          {error ? (
            <h2 style={{ color: "red" }}>Verifica los datos ingresados</h2>
          ) : (
            <h2 style={{ color: "#181854" }}>-</h2>
          )}
          {sendForm ? (
            <h2 style={{ color: "green" }}>Datos enviados correctamente</h2>
          ) : (
            <h2 style={{ color: "#181854" }}>-</h2>
          )}
          <InputForm
            onChange={e => setName(e.target.value)}
            type="text"
            name="name_form"
            id="name_form"
            placeholder="Name"
          />

          <InputForm
            onChange={e => setMail(e.target.value)}
            type="text"
            name="mail_form"
            id="mail_form"
            placeholder="Mail Adress"
          />

          <Textarea
            onChange={e => setQuery(e.target.value)}
            name="query_form"
            id="query_form"
            cols="10"
            rows="5"
            placeholder="Query"
          ></Textarea>

          <SubmitContainer>
            <SubmitBtn type="submit" value="Submit" />
          </SubmitContainer>
        </Form>
      </ContactContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
    width: 100vw;
    height: 90vh;
    margin: 3rem auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", monospace;
  `,
  ContactContainer = styled.section`
    width: 80vw;
    row-gap: 5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;

    @media (min-width: 480px) {
      height: 83vh;
      row-gap: 0;
    }

    @media (min-width: 1024px) {
      row-gap: 0;
      height: 80vh;
      width: 80vw;
    }
  `,
  Text = styled.article`
    color: #ffffff;
    height: 12vh;
    margin-bottom: 1rem;

    @media (min-width: 1224px) {
      margin-bottom: 0;
    }
  `,
  Title = styled.p`
    font-size: 2.5rem;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
  `,
  TitleSpan = styled.span`
    font-size: 1.4rem;
  `,
  Form = styled.form`
    width: 50vw;
    height: 60vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 3vh;
    column-gap: 1vw;
  `,
  InputForm = styled.input`
    border: none;
    border-bottom: 2.3px solid #ff6700;
    border-radius: 8px;
    padding-left: 2vw;
    font-family: "Poppins", monospace;
    width: 48vw;
    height: 8vh;
    background-color: #ebebeb;
    outline: none;

    /* &::placeholder {
      color: #858585;
    } */

    @media (max-width: 800px) {
      width: 80vw;
    }
  `,
  Textarea = styled.textarea`
    border: none;
    border-bottom: 2.3px solid #ff6700;
    outline: none;
    border-radius: 8px;
    padding-top: 2vh;
    padding-left: 2vw;
    font-family: "Poppins";
    width: 48vw;
    height: 17vh;
    background-color: #ebebeb;
    resize: none;

    &::placeholder {
      color: #858585;
    }

    @media (max-width: 800px) {
      width: 80vw;
    }
  `,
  SubmitContainer = styled.article`
    width: 100vw;
    text-align: center;

    @media (min-width: 1224px) {
      width: 50vw;
      text-align: end;
    }
  `,
  SubmitBtn = styled.input`
    font-family: "Poppins", monospace;
    font-weight: 500;
    color: #ff6700;
    width: 13rem;
    height: 45px;
    font-size: 1.1rem;
    outline: 2px solid #ff6700;
    border-radius: 8px;
    background-color: transparent;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    border: none;

    &:hover {
      cursor: pointer;
      color: #fff;
      scale: 1.1;
      box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
      outline: none;
      border: none;
      background-color: #ff6700;
    }
  `;
