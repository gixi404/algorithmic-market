import { useAuth0, withAuthenticationRequired } from "@auth0/auth0-react";
import BuyBtn from "../../Courses/Button";
import Header from "./Header";
import Footer from "../Footer";
import styled from "styled-components";

function Profile() {
  const { user, logout } = useAuth0();

  return (
    <Container>
      <Header />
      <UserContainer>
        <Img
          src={user?.picture}
          loading="lazy"
          alt={`imágen de ${user?.name}`}
        />
        <Name>{user.name !== user.email && user?.name}</Name>
        <Name>{user?.email}</Name>
        <BuyBtn title="Cerrar Sesión" logOut={logout} />
      </UserContainer>

      <Footer />
    </Container>
  );
}

export default withAuthenticationRequired(Profile);

const Container = styled.section`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins", monospace;
  `,
  UserContainer = styled.article`
    background-color: #ebebeb;
    width: 80vw;
    max-width: 400px;
    height: 50vh;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 1em;
    margin: 5em 0;
  `,
  Name = styled.p`
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    text-align: start;
    color: black;
    font-weight: 400;
  `,
  Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
  `;
