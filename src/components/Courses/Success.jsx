import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProps } from "../Context";
import styled from "styled-components";

function Success() {
  const List = JSON.parse(localStorage.getItem("list"));
  const Id = JSON.parse(localStorage.getItem("id"));
  const { courseSelected } = useContext(ContextProps);

  const mappedList = List.map(item => ({
    name: item.price_data.product_data.name,
    des: item.price_data.product_data.description,
    price: item.price_data.unit_amount / 100,
    id: Id.id,
  }));

  let selectCourse = courseSelected;

  if (window.location.pathname === "/success/0")
    selectCourse = courseSelected(0);

  if (window.location.pathname === "/success/1")
    selectCourse = courseSelected(1);

  if (window.location.pathname === "/success/2")
    selectCourse = courseSelected(2);

  return (
    <Div>
      <Section>
        <ExtraData>
          <Link to="/">
            <Back>Atrás</Back>
          </Link>
        </ExtraData>
        {mappedList.map(item => (
          <article key={item.id}>
            <p>{item.name}</p>
            <p>{item.des}</p>
            <p>${item.price}</p>
          </article>
        ))}
      </Section>
    </Div>
  );
}

export default Success;

const Div = styled.div`
    scrollbar-gutter: stable both-edges;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 80vw;
    height: 90vh;
    border-radius: 15px;
    background-image: linear-gradient(
      to bottom,
      #051937,
      #121e3a,
      #1b233c,
      #23283f,
      #2b2d42
    );
    box-shadow: 0 0 35px #000;
  `,
  UserData = styled.main`
    border: 0;
    padding: 2vh 0;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 20vh;
    width: 80vw;
  `,
  H2 = styled.h2`
    text-align: center;
    margin: 2vh 0;
    color: #f5f5f5;
  `,
  Article = styled.article`
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
  `,
  Img = styled.img`
    height: 50px;
    width: 50px;
    padding: 1vh;
    border-radius: 100%;
  `,
  P = styled.p`
    line-height: 60px;
    font-weight: bold;
  `,
  H4 = styled.h4`
    line-height: 60px;
  `,
  TransactionData = styled.div`
    height: 55vh;
  `,
  Data = styled.section`
    display: flex;
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
  a {
    text-decoration: none;
  }
`;
const Back = styled.h2`
  transition: all 0.3s ease;
  width: max-content;
  margin: 0;
  color: #f5f5f5;
  background-color: #051937;
  border: 0;
  border-radius: 20px;
  padding: 1vh 2vw;
  &:hover {
    cursor: pointer;
    color: #051937;
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #757575;
  }
`;
