import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import LogoutBtn from "./LogoutBtn";
import styled from "styled-components";

function Profile() {
  const { user, isLoading } = useAuth0();
  if (isLoading) {
    return <p>Cargando</p>;
  }
  return (
    <ProfileContainer>
      <Link to="/">Atrás</Link>

      <h2>Perfíl</h2>

      <UserContainer>
        <p>
          <SpanUser>Nombre: </SpanUser>
          {user.name}
        </p>
        <p>
          <SpanUser>Email:</SpanUser> {user.email}
        </p>
        <img src={user.picture} alt={user.name} />
      </UserContainer>

      <LogoutBtn />
    </ProfileContainer>
  );
}

export default Profile;

const ProfileContainer = styled.div`
  background-color: #457b9d;
  width: 330px;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  row-gap: 2rem;
`;

const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  row-gap: 5px;
`;

const SpanUser = styled.span`
  text-transform: uppercase;
  font-weight: bold;
`;
