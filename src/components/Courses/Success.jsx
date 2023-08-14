import { styled } from "styled-components"
import { useContext } from "react"
import { ContextProps } from "../Context.jsx";
import Imgg from '../../img/alex-shuper-KwrPZDvZRPk-unsplash.jpg'
import { useEffect } from "react";
function success() {
    const { courseBuy, setCourseBuy } = useContext(ContextProps);
    const handleBack= ()=>{
        window.location.href="/"
    }
    useEffect(()=>{
        if(courseBuy !== null){
            console.log(courseBuy)
        }
    },[courseBuy])
    return(
    <Div>
        <Section>
            <UserData>
                <H2>Purchase completed successfully</H2>
                <Article>
                    <Img src={Imgg} alt="mansi" />
                    <P>{ courseBuy }</P>
                    <H4>XXXX-XXXX-XXXX-4242</H4>
                    <H4>$500</H4>
                </Article>
            </UserData>
            <TransactionData>
                <H2>Info. Transaction</H2>
                <Data>
                    <ArticleData>
                        <strong>Date: 13/12/2003</strong>
                        <strong>Mail: Hsiesos@gmail.com</strong>
                    </ArticleData>
                    <ArticleDataShell>
                        <strong>N° transaction: 3w732237032</strong>
                        <strong>Name: Curso de sexo</strong>
                        <strong>Description: Descripción breve.</strong>
                        <strong>Imprimir Comprobante</strong>
                    </ArticleDataShell>
                </Data>
            </TransactionData>
            <ExtraData>
                <Back onClick={()=>{handleBack()}}>Back Home</Back>
            </ExtraData>
        </Section>
    </Div>
    )
}

export default success

const Div = styled.div`
    scrollbar-gutter: stable both-edges;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 90vh;
    border-radius: 15px;
    background-image: linear-gradient(to bottom, #051937, #121e3a, #1b233c, #23283f, #2b2d42);
    box-shadow: 0 0 35px #000;
`;
const UserData = styled.main`
    border: 0;
    padding: 2vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20vh;
    width: 80vw;
`;
const H2 = styled.h2`
    text-align: center;
    margin: 2vh 0;
    color: #F5F5F5;
`;
const Article = styled.article`
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 82vw;
    border: 0;
    border-radius: 5px;
    margin: 0 -1vw;
    background-color: #bbbbbb;
    box-shadow: 0 0 20px #000;
    box-sizing: border-box;
`;
const Img = styled.img`
height: 50px;
width: 50px;
padding: 1vh;
border-radius: 100%;
`;
const P = styled.p`
    line-height: 60px;
    font-weight: bold;
`;
const H4 = styled.h4`
    line-height: 60px;
`;
const TransactionData = styled.div`
    height: 55vh;
`;
const Data = styled.section`
    display:flex ;
    flex-direction: column;
    height: 45vh;
    width: 82vw;
    border: 0;
    border-radius: 5px;
    margin: 0 -1vw;
    background-color: #bbbbbb;
    box-shadow: 0 0 20px #000;
    box-sizing: border-box;
`;
const ArticleData = styled.article`
    height: 10vh;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;
const ArticleDataShell = styled.article`
    height: 20vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;
const ExtraData = styled.article`
width: max-content;
`;
const Back = styled.h2`
    transition: all .3s ease;
    width: max-content;
    margin: 0 ;
    color: #F5F5F5;
    background-color: #051937;
    border:0;
    border-radius: 20px;
    padding: 1vh 2vw;
    &:hover{
        cursor: pointer;
        color: #051937;
        background-color:#F5F5F5 ;
    }
    &:active{
        background-color: #757575;
    }
`;
