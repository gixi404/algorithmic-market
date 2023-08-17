import styled from "styled-components";
import Btn from '../Courses/Button'

function Contact() {
  const title = "Submit"
  const url = "https://www.google.com"
  return (
    <Container>
      <ContactContainer id="contact">
        <Text>
          <P>Contact us</P>
          <p>We're Here to Listen and Help. Send your doubts or queries!</p>
        </Text>
        <Form>
          <Name type="text" name="name" placeholder="Name"></Name>
          <LastName type="text" name="apellido" placeholder="Last Name"></LastName>
          <Mail type="email" name="Correo Electronico" placeholder="Mail Adress"></Mail>
          <Textarea wrap="soft" maxLength={200} name="Consulta" cols="10" rows="5" placeholder="Write Your Query"></Textarea>
          <SBtn ><Btn title={title} url={url} /></SBtn>
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
`;
const ContactContainer = styled.section`
  width: 80vw;
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Text = styled.article`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  color: #ababab;
  height: 12vh;
  p{
    font-style: normal;
    font-weight: normal;
  }
`;
const P = styled.p`
  font-size: 2.5rem;
`;
const Form = styled.form`
  width: 50vw;
  height: 52vh;
  display: grid;
  margin: 0 auto;
  grid-template-rows: repeat(5, 8vh);
  grid-template-columns: 1fr 1fr ;
  column-gap: 1vw;
  row-gap: 3vh;
  @media(max-width:800px){
    width: 80vw;
    margin: 0;
  }
`;
const Name = styled.input`
  border: 0 ;
  border-radius: 8px;
  padding-left: 2vw;
  font-family: "Poppins", monospace;
  width:22.5vw;
  height: 8vh;
  background-color: #ebebeb;
  ::placeholder{
    color: #c0c0c0;
  }
  @media(max-width:800px){
    width:38.5vw;
  }
`;
const LastName = styled.input`
  border: 0 ;
  border-radius: 8px;
  padding-left: 2vw;
  font-family: "Poppins", monospace;
  width: 22.5vw;
  height: 8vh;
  background-color: #ebebeb;
  ::placeholder{
    color: #c0c0c0;
  }
  @media(max-width:800px){
    width:38.5vw;
  }
`;
const Mail = styled.input`
  border: 0 ;
  border-radius: 8px;
  grid-column: 1/3;
  padding-left: 2vw;
  font-family: "Poppins", monospace;
  width: 48vw;
  height: 8vh;
  background-color: #ebebeb;
  ::placeholder{
    color: #c0c0c0;
  }
  @media(max-width:800px){
    width:80vw;
  }
`;
const Textarea = styled.textarea`
  border: 0 ;
  border-radius: 8px;
  grid-column: 1/3;
  grid-row: 3/5;
  padding-top: 2vh;
  padding-left: 2vw;
  font-family: "Poppins";
  width: 48vw;
  height: 17vh;
  background-color: #ebebeb;
  resize: none;
  ::placeholder{
    color: #c0c0c0;
  }
  @media(max-width:800px){
    width:80vw;
  }
`;
const SBtn = styled.article`
  display: flex;
  justify-content: end;
  grid-column: 2/3;
  height: 7vh;
  :first-child{
    height: 7vh;
    border-radius: 8px;
    a{
      line-height: 7vh;
    }
  }
`;