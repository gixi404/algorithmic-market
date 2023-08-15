import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ContextProps } from "../Context.jsx";
import PayLayout from "./PayLayout.jsx";
import styled from "styled-components";

function CourseDetails() {
  const { coursedetails } = useParams();
  const { courseSelected } = useContext(ContextProps);

  const { name, price, img, description } = courseSelected(coursedetails);
  if (window.location.href === 'http://localhost:3000/details/0') {

  }
  else if (window.location.href === 'http://localhost:3000/details/1') {
    console.log('atardecer')
  }
  else {
    console.log('anochecer')
  }
  return (
    <Container>
      <Detaill>
        <Data>
          <Name>{name}:</Name>
          <Precio> ${price}</Precio>
        </Data>
        <Img>
          <img src={img} alt="" />
        </Img>
        <Description>{description}</Description>
        <PayLayout courseSelected={courseSelected(coursedetails)} />
      </Detaill>
      <Detaill2>
        <Header>
          <Button>
            <Link to="/">Back</Link>
          </Button>
          <H2>King of Trade</H2>
          <span></span>
        </Header>
        <Article>
          <Course >
            <Link to="/details/0">Trader Initial</Link>
          </Course>
          <Course >
            <Link to="/details/1">Trader Medium</Link>
          </Course>
          <Course >
            <Link to="/details/2">Trader Advance</Link>
          </Course>
        </Article>
      </Detaill2>
    </Container>
  );
}

export default CourseDetails;

const Container = styled.div`
  background-image: linear-gradient(
    to bottom,
    #051937,
    #121e3a,
    #1b233c,
    #23283f,
    #2b2d42
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
`;
const Detaill = styled.section`
  border-bottom-right-radius: 5%;
  z-index: 50;
  background-color: #457b9d;
  margin-left: 15vw;
  margin-top: 10vh;
  box-sizing: border-box;
  border-bottom-right-radius: 5%;
  box-shadow: 0 0 1vh #181818;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  font-size: large;
  color: #f5f5f5;
  width: 70vw;
  height: 70vh;
`;
const Data = styled.article`
  width: 25vh;
  position: relative;
  left: -2vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const Name = styled.h3``;
const Img = styled.div`
  width: min-content;
  height: min-content;
  position: relative;
  left: -5vw;
`;
const Description = styled.p``;
const Precio = styled.strong``;
const Detaill2 = styled.div`
  position: absolute;
  left: 7.5vw;
  top: 10vh;
  z-index: 1;
  background-color: #457b9d;
  border-radius: 5%;
  box-sizing: content-box;
  box-shadow: 0 0 5vh #181818;
  width: 85vw;
  height: 80vh;
  border-bottom-left-radius: 1vh;
  border-top-right-radius: 1vh;
`;
const Header = styled.header`
  height: 10vh;
  display: flex;
  position: relative;
  z-index: 55;
  flex-direction: row;
  text-align: center;
  align-items: center;
  justify-content: space-between;
`;
const H2 = styled.h2`
  margin: 0;
  margin-left: -3vh;
  width: max-content;
  display: inline;
`;
const Button = styled.button`
  padding: 2vh;
  margin-left: 3vh;
  border-radius: 4vh;
  border: 0;
  background-color: #202020;
  transition: all 0.5s ease;
  &:hover {
    background-color: #233f50;
  }
  &:active {
    background-color: #13222c;
  }
  a {
    border-radius: 4vh;
    text-decoration: none;
    color: #f5f5f5;
    font-size: large;
    font-weight: bolder;
    font-stretch: expanded;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
  }
`;
const Article = styled.article`
  width: 15vw;
  height: 70.1vh;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: end;
  justify-content: center;
  box-shadow: 0 0 1vh #181818;
  border-bottom-left-radius: 1vh;
`;
const Course = styled.div`
  height: 23.3vh;
  width: 14vw;
  display: flex;
  border: 0;
  margin: 0;
  padding: 0;
  align-items: center;
  justify-content: space-around;
  transition: all 0.3s ease;
  border-top-left-radius: 5vh;
  border-bottom-left-radius: 5vh;
  &:hover {
    background-color: #2d4e63;
  }
  &:active {
    background-color: #203644;
  }
  a {
    text-decoration: none;
    color: #181818;
    font-size: 1.3rem;
    font-weight: bolder;
    font-stretch: wider;
    white-space: break-spaces;
    letter-spacing: 0.3vw;
  }
`;
