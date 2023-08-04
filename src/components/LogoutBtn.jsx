import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function LogoutBtn() {
  const { logout } = useAuth0();

  return (
    <LogoutButton
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Cerrar Sesión
    </LogoutButton>
  );
}

export default LogoutBtn;

const LogoutButton = styled.button`
  padding: 0.5rem;
  border-radius: 5px;
  border: none;
  outline: none;
  font-size: 1.1rem;
`;
