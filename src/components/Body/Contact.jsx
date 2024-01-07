import { useEffect, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_PATH } from "../../utils/consts.js";
import styled from "styled-components";

function Contact() {
  const { isAuthenticated } = useAuth0(),
    [errorForm, setErrorForm] = useState(false),
    [sendForm, setSendForm] = useState(false);

  useEffect(() => {
    if (sendForm) {
      const timeout = setTimeout(() => {
        setSendForm(false);
        window.location.reload();
      }, 2000);

      return () => clearTimeout(timeout);
    }
  }, [sendForm]);

  function handleSubmitForm(event) {
    event.preventDefault();

    const { dataForm, invalidFields } = extractFormData(event);

    if (invalidFields) {
      setErrorForm(true);
      const timeout = setTimeout(() => setErrorForm(false), 2000);
      return () => clearTimeout(timeout);
    }

    return sendMail(dataForm);
  }

  function extractFormData(event) {
    const name = event.target.name_form.value.trimStart(),
      mail = event.target.mail_form.value.trimStart(),
      message = event.target.query_form.value.trimStart(),
      dataForm = {
        name,
        mail,
        message,
      },
      mailRegExp = new RegExp(
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
      ),
      invalidFields =
        name === "" || mail === "" || message === "" || !mailRegExp.test(mail);

    return { dataForm, invalidFields };
  }

  async function sendMail(dataForm) {
    try {
      setSendForm(true);
      await fetch(`${BACK_PATH}/form`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer yourAccessToken",
        },
        body: JSON.stringify(dataForm),
      });
    } catch (err) {
      console.error(err.message);
    }
  }

  return (
    <Container id="contact">
      <Content>
        <Text style={{ marginBottom: errorForm || sendForm ? "5em" : 0 }}>
          <Title>
            Contacto
            <span>
              Estamos para escuchar y ayudarte. ¡Envía tus dudas o consultas!
            </span>
          </Title>
        </Text>

        {sendForm || errorForm ? (
          <MessageValidation
            style={{ backgroundColor: sendForm ? "#9aff86" : "#ff9191" }}
          >
            <TextValidation>
              {sendForm ? "Información enviada" : "Revisa la información"}
            </TextValidation>
          </MessageValidation>
        ) : null}

        <Form onSubmit={handleSubmitForm}>
          <Label>
            Nombre
            <Input
              type="text"
              name="name_form"
              placeholder="Ingrese su nombre"
            />
          </Label>

          <Label>
            Mail
            <Input
              type="email"
              name="mail_form"
              placeholder="ejemplomail@gmail.com"
            />
          </Label>

          <Label>
            Consulta
            <Textarea
              name="query_form"
              cols="10"
              rows="5"
              placeholder="Mi consulta es..."
            ></Textarea>
          </Label>

          <SubmitContainer>
            {isAuthenticated ? (
              <SubmitBtn type="submit" value="Enviar" />
            ) : (
              "Inicia sesión para enviar"
            )}
          </SubmitContainer>
        </Form>
      </Content>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
    width: 100vw;
    height: 100vh;
    margin: 3em auto 0 auto;
    background-color: #ebebeb;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    display: flex;
    border-top: solid 4px #ff6700;
    justify-content: center;
    align-items: center;
    @media (min-width: 1226px) {
      height: 100vh;
    }
  `,
  Content = styled.div`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  `,
  Text = styled.article`
    height: 10vh;
  `,
  Title = styled.p`
    padding-top: 2rem;
    font-size: calc(30px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: "Poppins", monospace;
    justify-content: center;
    span {
      font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    }
  `,
  Form = styled.form`
    width: 50vw;
    height: 90vh;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 3vh;
    column-gap: 1vw;
  `,
  Label = styled.label`
    font-family: "Poppins", monospace;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #ff7d27;
    text-align: start;
  `,
  Input = styled.input`
    border: none;
    border-bottom: 2.3px solid #ff6700;
    border-radius: 8px;
    padding-left: 2vw;
    font-family: "Poppins", monospace;
    font-size: calc(11px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    width: 48vw;
    height: 8vh;
    outline: none;

    @media (max-width: 800px) {
      width: 80vw;
    }

    &::placeholder {
      color: #585858;
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
    font-size: calc(11px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    width: 48vw;
    height: 17vh;
    resize: none;

    &::placeholder {
      color: #585858;
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
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
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
  `,
  MessageValidation = styled.div`
    align-self: center;
    width: max-content;
    padding: 0.3em 4em;
    background-color: #ff9191;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0.3em;
    border: 2px solid #000;
    margin-top: 0.5em;
    @media (max-width: 480px) {
      margin-top: 2em;
      padding: 0.8em;
    }
  `,
  TextValidation = styled.p`
    font-family: "Poppins", monospace;
    font-weight: 400;
    color: #000000;
    font-size: calc(20px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  `;
