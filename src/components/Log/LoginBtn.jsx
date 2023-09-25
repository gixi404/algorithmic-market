import { useAuth0 } from "@auth0/auth0-react";
import { useMyContext } from "../Context";
import styled from "styled-components";
import { useEffect } from "react";

function LoginBtn() {  
  const { loginWithPopup } = useAuth0(),
    { IS_MOBILE } = useMyContext();
  const bodyCore = {username: 'bakflip',email:'backflip@gmail.com',courses:{name:'curso inicial', id: 1}}
  const infoFetch = {method:'post',headers:{"Content-Type": "application/json"}, body: JSON.stringify(bodyCore)}
  const logUser = async() => {
    try{/* 
      const data = await fetch('http://localhost:3001/users',infoFetch),
      json = await data.json()
      console.log(json) */
      loginWithPopup()
    }
    catch(e){
      console.log(e.message)
    }
  }
  if (IS_MOBILE) {
    return (
      <ContainerMobile>
        <LoginButtonMobile onClick={loginWithPopup}>
          Iniciar Sesión
        </LoginButtonMobile>
      </ContainerMobile>
    );
  } else {
    return <LoginButton onClick={logUser}>Iniciar Sesión</LoginButton>;
  }
}

export default LoginBtn;

const ContainerMobile = styled.div`
    width: 100vw;
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  LoginButtonMobile = styled.button`
    font-family: "Poppins", monospace;
    padding: 10px 18px;
    text-align: center;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #ff6700;
    outline: 2px solid #ff6700;
    border-radius: 5px;
    background-color: transparent;
    overflow: hidden;
    border: none;
  `,
  LoginButton = styled.button`
    position: relative;
    font-family: "Poppins", monospace;
    padding: 8px 15px;
    text-align: center;
    font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #ff6700;
    outline: 2px solid #ff6700;
    border-radius: 5px;
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
  `;
