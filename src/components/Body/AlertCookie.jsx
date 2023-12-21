import { useEffect } from "react";
import { useMyContext } from "../Context.jsx";
import styled from "styled-components";

function AlertCookie() {
  const { cookInfo, setCookInfo } = useMyContext();

  useEffect(() => {
    if (cookInfo) {
      document.body.classList.remove("no-scroll");
    } else {
      document.body.classList.add("no-scroll");
    }
  }, [cookInfo]);

  function handleAlert() {
    setCookInfo(false);
    document.body.classList.remove("no-scroll");
  }

  return (
    <Alert>
      <Title>Algorithmic Market</Title>
      <Text>
        Le sugerimos habilitar el uso de cookies para el correcto funcionamiento
        del sitio web, gracias.
      </Text>
      <Button onClick={handleAlert}>Entendido</Button>
    </Alert>
  );
}
export default AlertCookie;

const Alert = styled.div`
    margin: 2em 0;
    background-color: #ebebeb;
    display: flex;
    flex-direction: column;
    align-items: end;
    border-radius: 0.8em;
    border-right: 3px solid #ff6700;
    border-bottom: 3px solid #ff6700;
    @media (max-width: 1224px) {
      width: 90vw;
    }
  `,
  Title = styled.h2`
    color: #ff6700;
    display: flex;
    flex-direction: column;
    width: 95%;
    text-align: start;
    margin: 1em 0;
  `,
  Text = styled.p`
    width: 95%;
    text-align: start;
  `,
  Button = styled.button`
    height: max-content;
    width: 10vw;
    min-width: 100px;
    margin-top: 1.5em;
    margin-bottom: 1.5em;
    margin-right: 1.5em;
    padding: 0.5em 1em;
    font-family: "Poppins", monospace;
    text-align: center;
    font-size: calc(12px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #ff6700;
    outline: 2px solid #ff6700;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    overflow: hidden;
    border: none;
    cursor: pointer;
    &:hover {
      color: #fff;
      scale: 1.1;
      box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
      outline: none;
      border: none;
      background-color: #ff6700;
    }
  `;
