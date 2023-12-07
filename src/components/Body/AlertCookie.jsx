import { useEffect } from "react";
import { useMyContext } from "../Context";
import styled from "styled-components"

function AlertCoockie (){
    const {cookInfo, setCookInfo} = useMyContext()
    useEffect(() =>{
        !cookInfo ? document.body.classList.add('no-scroll') : document.body.classList.remove('no-scroll') 
    },[cookInfo]);

    const handleAlert = () => {
        setCookInfo(false)
        document.body.classList.remove('no-scroll') 
    }
    return(
        <Alert>
            <Title>Algorithmic Market</Title>
            <Text>Para una mejor experiencia le sugerimos habilitar el uso de cookies.</Text>
            <Button onClick={handleAlert}>Entendido</Button>
        </Alert>
    )

}
export default AlertCoockie

const Alert = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    align-items: end;
    height: 30vh;
    width: 80%;
    top: 14vh;
    border-radius: 0.8rem;
    justify-content: space-between;
    background-color: #EBEBEB;
    border-right: 3px solid #ff6700;
    border-bottom: 3px solid #ff6700;
`;
const Title = styled.h2`
    color: #ff6700;
    display: flex;
    flex-direction:column;
    width: 100%;
    align-items: center;
    margin: 1rem 0 ;
`;
const Text = styled.p`
    width: 95%;
    align-items: start;
`;
const Button= styled.button`
    height: max-content;
    width: 10vw;
    margin: 1rem;
    font-family: "Poppins",monospace;
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
    cursor: pointer;
    &:hover{
    color: #fff;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
    outline: none;
    border: none;
    background-color: #ff6700;
    }
`;