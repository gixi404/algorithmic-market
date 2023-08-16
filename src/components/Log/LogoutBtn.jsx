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
      Log out
    </LogoutButton>
  );
}

export default LogoutBtn;

const LogoutButton = styled.button`
  position: relative;
  font-family: "Poppins", monospace;
  padding: 1vh 0 1vh  2vh;
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
    color: #212121;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
    outline: none;
    border: none;
    background-color: rgb(193, 163, 98);
  }
`;
