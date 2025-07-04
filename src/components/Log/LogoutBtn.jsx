import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function LogoutBtn() {
  const { logout } = useAuth0();

  function handleLogout() {
    logout({ logoutParams: { returnTo: window.location.origin } });
  }

  return <LogoutButton onClick={handleLogout}>Cerrar Sesión</LogoutButton>;
}

export default LogoutBtn;

const LogoutButton = styled.button`
  margin-top: 16px;
  position: relative;
  font-family: "Poppins", monospace;
  padding: 8px 15px;
  text-align: center;
  font-size: 16px;
  color: #ff6700;
  outline: 2px solid #ff6700;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  border: none;
  &:hover {
    cursor: pointer;
    color: #ffffff;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
    outline: none;
    border: none;
    background-color: rgb(193, 163, 98);
  }
`;
