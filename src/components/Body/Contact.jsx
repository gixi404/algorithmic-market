import { useRef, useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_PATH } from "../../utils/consts.js";
import styled from "styled-components";

function Contact() {
  const [errorForm, setErrorForm] = useState(false),
    [sendForm, setSendForm] = useState(false),
    { isAuthenticated } = useAuth0(),
    Name = useRef(null),
    Mail = useRef(null),
    Query = useRef(null);

  let hasError = false;

  function handleSubmitForm(event) {
    event.preventDefault();

    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      regexQuery = /^(.{1,800})$/,
      checkField = {
        name: Name.current.value.trimStart() === "",
        mail:
          !regexMail.test(Mail.current.value.trimStart()) ||
          Mail.current.value.trimStart() === "",
        query:
          !regexQuery.test(Query.current.value.trim()) ||
          Query.current.value === "",
      };

    function changeInputColor(input) {
      switch (input) {
        case "Name":
          {
            setErrorForm(true);
            Name.current.style.borderBottom = "5px solid #f00";
            setTimeout(() => {
              Name.current.style.borderBottom = "2.3px solid #ff6700";
              setErrorForm(false);
            }, 2000);
          }
          break;

        case "Mail":
          {
            setErrorForm(true);
            Mail.current.style.borderBottom = "5px solid #f00";
            setTimeout(() => {
              Mail.current.style.borderBottom = "2.3px solid #ff6700";
              setErrorForm(false);
            }, 2000);
          }
          break;

        case "Query":
          {
            setErrorForm(true);
            Query.current.style.borderBottom = "5px solid #f00";
            setTimeout(() => {
              Query.current.style.borderBottom = "2.3px solid #ff6700";
              setErrorForm(false);
            }, 2000);
          }
          break;

        default:
          {
            Name.current.style.borderBottom = "2.3px solid #ff6700";
            setErrorForm(false);
          }
          break;
      }
    }

    if (checkField.name) {
      changeInputColor("Name");
      hasError = true;
    }

    if (checkField.mail) {
      changeInputColor("Mail");
      hasError = true;
    }

    if (checkField.query) {
      changeInputColor("Query");
      hasError = true;
    }

    if (!hasError) {
      setSendForm(true);
      async function dataToFetch() {
        const dataForm = {
          name_form: Name.current.value,
          mail_form: Mail.current.value,
          query_form: Query.current.value,
        };

        try {
          const res = await fetch(`${BACK_PATH}/form`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer yourAccessToken",
            },
            body: JSON.stringify(dataForm),
          });
          const resp = await res.json();
          console.log(resp);
        } catch (error) {
          console.error(error);
          setSendForm(false);
        }
      }
      dataToFetch();

      setTimeout(() => {
        (Name.current.value = ""),
          (Mail.current.value = ""),
          (Query.current.value = "");
        setSendForm(false);
      }, 2000);
    }
  }

  return (
    <Container id="contact">
      <Content>
        <Text>
          <Title>
            Contacto
            <span>
              Estamos para escuchar y ayudarte. ¡Envía tus dudas o consultas!
            </span>
          </Title>
        </Text>

        <Form onSubmit={handleSubmitForm}>
          {sendForm || errorForm ? (
            <MessageValidation>
              {sendForm ? (
                <TextValidation style={{ color: "green" }}>
                  Información enviada
                </TextValidation>
              ) : (
                <TextValidation style={{ color: "red" }}>
                  Revisa la información
                </TextValidation>
              )}
            </MessageValidation>
          ) : null}

          <Label>
            Nombre
            <Input
              type="text"
              name="name_form"
              ref={Name}
              placeholder="Ingrese su nombre"
            />
          </Label>

          <Label>
            Mail
            <Input
              type="email"
              name="mail_form"
              ref={Mail}
              placeholder="ejemplomail@gmail.com"
            />
          </Label>

          <Label>
            Consulta
            <Textarea
              name="query_form"
              ref={Query}
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
    width: 100%;
    background-color: #fff;
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 0.3em;
    margin-top: 0.5em;
    @media (max-width: 480px) {
      margin-top: 2em;
      padding: 0.8em;
    }
  `,
  TextValidation = styled.p`
    font-family: "Poppins", monospace;
    font-weight: 400;
    color: red;
    font-size: calc(20px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    width: 100%;
    text-align: center;
    text-transform: uppercase;
  `;
