import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";
import BuyBtn from "../../Courses/Button";
import Header from "./Header";
import Footer from "../Footer";
import { useEffect } from "react";

function Profile() {
  const { user, logout } = useAuth0();
  function logOut() {
    return logout();
  }

  return (
    <Container>
      <Header />
      <UserContainer>
        <Img src={user?.picture} alt={`Imágen de ${user?.name}`} />
        <Name>{user?.name}</Name>
        <Name>{user?.email}</Name>
        <BuyBtn title="Cerrar Sesión" logOut={logOut} />
      </UserContainer>

      <Footer />
    </Container>
  );
}

export default Profile;

const Container = styled.article`
    width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    font-family: "Poppins", monospace;
  `,
  UserContainer = styled.div`
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
  `,
  Name = styled.p`
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    text-align: start;
    color: black;
    font-weight: 400;
  `,
  Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 90%;
    font-size: 0.9em;
    color: #000;
  `,
  Img = styled.img`
    width: 70px;
    height: 70px;
    border-radius: 100%;
  `;
