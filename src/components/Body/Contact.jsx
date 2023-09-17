import { useRef, useState } from "react";
import styled from "styled-components";

function Contact() {
  const [error, setError] = useState(false),
    [sendForm, setSendForm] = useState(false),
    Name = useRef(null),
    Mail = useRef(null),
    Query = useRef(null);

  let hasError = false;

  function handleSubmitForm(event) {
    event.preventDefault();
    const regexMail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      regexQuery = /^(.{1,800})$/;

    function changeInputColor(input) {
      switch (input) {
        case "Name":
          {
            setError(true);

            Name.current.style.borderBottom = "5px solid #f00";

            setTimeout(() => {
              Name.current.style.borderBottom = "2.3px solid #ff6700";
              setError(false);
            }, 2000);
          }
          break;

        case "Mail":
          {
            setError(true);

            Mail.current.style.borderBottom = "5px solid #f00";

            setTimeout(() => {
              Mail.current.style.borderBottom = "2.3px solid #ff6700";
              setError(false);
            }, 2000);
          }
          break;

        case "Query":
          {
            setError(true);

            Query.current.style.borderBottom = "5px solid #f00";

            setTimeout(() => {
              Query.current.style.borderBottom = "2.3px solid #ff6700";
              setError(false);
            }, 2000);
          }
          break;

        default:
          {
            Name.current.style.borderBottom = "2.3px solid #ff6700";
            setError(false);
          }
          break;
      }
    }

    if (Name.current.value === "") {
      changeInputColor("Name");
      hasError = true;
    }

    if (!regexMail.test(Mail.current.value) || Mail.current.value === "") {
      changeInputColor("Mail");
      hasError = true;
    }

    if (!regexQuery.test(Query.current.value) || Query.current.value === "") {
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
          const res = await fetch("http://localhost:3001/form", {
            method: "post",
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
      console.log("Datos enviados");

      setTimeout(() => {
        (Name.current.value = ""),
          (Mail.current.value = ""),
          (Query.current.value = "");
        setSendForm(false);
      }, 2000);
    } else {
      console.error("Datos incompletos");
    }
  }

  return (
    <Container id="contact">
      <ContactContainer>
        <Text>
          <Title>
            Contacto
            <TitleSpan>
              Estamos para escuchar y ayudate. ¡Envía tus dudas o consultas!
            </TitleSpan>
          </Title>
        </Text>

        <Form onSubmit={handleSubmitForm}>
          {error && (
            <MessageValidation>
              <ErrorValidation>Revisa la información</ErrorValidation>
            </MessageValidation>
          )}

          {sendForm && (
            <MessageValidation>
              <ConfirmValidation>Información enviada</ConfirmValidation>
            </MessageValidation>
          )}

          <InputForm
            type="text"
            name="name_form"
            id="name_form"
            ref={Name}
            placeholder="Nombre *"
          />

          <InputForm
            type="text"
            name="mail_form"
            ref={Mail}
            id="mail_form"
            placeholder="Correo electrónico *"
          />

          <Textarea
            name="query_form"
            id="query_form"
            ref={Query}
            cols="10"
            rows="5"
            placeholder="Consulta *"
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
    height: 80vh;
    margin: 3rem auto 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", monospace;
  `,
  ContactContainer = styled.section`
    width: 80vw;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  `,
  Text = styled.article`
    color: #ffffff;
    height: 10vh;

    /* @media (max-width: 480px) {
      margin-bottom: 4rem;
    } */
  `,
  Title = styled.p`
    font-size: calc(30px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    display: flex;
    flex-direction: column;
    align-items: start;
    font-family: "Poppins", monospace;
    justify-content: center;
  `,
  TitleSpan = styled.span`
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    font-family: "Poppins", monospace;
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
  InputForm = styled.input`
    border: none;
    border-bottom: 2.3px solid #ff6700;
    border-radius: 8px;
    padding-left: 2vw;
    font-family: "Poppins", monospace;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    width: 48vw;
    height: 8vh;
    background-color: #ebebeb;
    outline: none;

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
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

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
    font-size: calc(18px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));

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
    height: 5vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    @media (max-width: 480px) {
      height: 2vh;
    }
  `,
  ErrorValidation = styled.p`
    font-family: "Poppins", monospace;
    font-weight: 400;
    color: red;
    font-size: 2rem;
    background-color: #fff;
    border-radius: 0.3em;
    padding: 0.3em 1em;
    text-transform: uppercase;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  `,
  ConfirmValidation = styled.p`
    font-family: "Poppins", monospace;
    font-weight: 400;
    color: green;
    background-color: #fff;
    border-radius: 0.3em;
    padding: 0.3em 1em;
    font-size: 2rem;
    text-transform: uppercase;

    @media (max-width: 480px) {
      font-size: 1rem;
    }
  `;
