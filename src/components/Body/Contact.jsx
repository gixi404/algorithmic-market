import styled from "styled-components";
import Btn from "../Courses/Button";

function Contact() {
  const title = "Submit";
  const url = "https://www.google.com";
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

        <Form>
          <InputForm
            style={{ gridColumn: "1/6" }}
            type="text"
            name="name"
            placeholder="Name"
          />

          <InputForm
            style={{ gridColumn: "2/6" }}
            type="text"
            name="phone-number"
            placeholder="Number phone"
          />

          <InputForm
            style={{ gridColumn: "3/6" }}
            type="email"
            name="Correo Electronico"
            placeholder="Mail Adress"
          />

          <Textarea
            name="query"
            cols="10"
            rows="5"
            placeholder="Query"
            style={{ gridColumn: "4/6" }}
          ></Textarea>

          <SubmitContainer style={{ gridColumn: "5/6" }}>
            <Btn title={title} url={url} />
          </SubmitContainer>
        </Form>
      </ContactContainer>
    </Container>
  );
}

export default Contact;

const Container = styled.div`
    width: 100vw;
    height: 70vh;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: "Poppins", monospace;
  `,
  ContactContainer = styled.section`
    width: 80vw;
    height: 470px;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: space-between;
  `,
  Text = styled.article`
    color: #ababab;
    height: 12vh;
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
    display: grid;
    margin: 0 auto;
    grid-template-rows: repeat(6, 8vh);
    grid-template-columns: 1fr 1fr;
    column-gap: 1vw;
    row-gap: 3vh;

    @media (max-width: 480px) {
      column-gap: 0;
      row-gap: 2vh;
      width: 80vw;
    }
  `,
  InputForm = styled.input`
    border: 0;
    border-radius: 8px;
    padding-left: 2vw;
    font-family: "Poppins", monospace;
    width: 48vw;
    height: 8vh;
    background-color: #ebebeb;
    outline: none;

    &::placeholder {
      color: #858585;
    }

    @media (max-width: 800px) {
      width: 80vw;
    }
  `,
  Textarea = styled.textarea`
    border: 0;
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
    width: 20vw;
    margin-top: 4rem;
  `,
  SubmitBtn = styled.button``;

// font-family: "Poppins", monospace;
// font-weight: 500;
// color: #ff6700;
// width: 20%;
// height: 40px;
// font-size: 16px;
// outline: 2px solid #ff6700;
// border-radius: 5px;
// background-color: transparent;
// transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
// overflow: hidden;
// border: none;
