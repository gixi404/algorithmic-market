import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

function LoginBtn() {
  const { loginWithPopup } = useAuth0();

  return <LoginButton onClick={loginWithPopup}>Log in</LoginButton>;
}

export default LoginBtn;

const LoginButton = styled.button`
  position: relative;
  font-family: "Open Sans", monospace;
  padding: 8px 15px;
  font-size: 16px;
  color: rgb(193, 163, 98);
  outline: 2px solid rgb(193, 163, 98);
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
