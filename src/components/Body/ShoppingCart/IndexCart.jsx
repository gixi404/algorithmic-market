import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProps } from "../../Context";
import ItemCart from "./ItemCart";
import trash from "../../../img/trash-bin-2-svgrepo-com.svg";
import X from "../../../img/close-svgrepo-com.svg";
import styled from "styled-components";

function indexCart() {
  const { coursesCart, setCoursesCart } = useContext(ContextProps),
    [value, setValue] = useState(0);

  useEffect(() => {
    function recuderCash() {
      if (coursesCart.length < 0) return "0";
      const price = coursesCart.reduce((ac, cv) => ac + cv.cash, 0);
      setValue(price);
    }

    recuderCash();
  }, [coursesCart]);

  const handleClick = () => setCoursesCart([]);

  return (
    <CartContainer>
      <Header>
        <h3>Added to bag</h3>
        <Img src={trash} alt="eraser buys" onClick={handleClick} />
        <Link to="/">
          <Img src={X} alt="close cart" />
        </Link>
      </Header>

      <ItemContainer>
        {coursesCart.map(course => (
          <ItemCart key={course.id} data={course} />
        ))}
      </ItemContainer>

      <Footer>
        <Article>
          <p>Bag Subtotal</p>
          <strong>${value}</strong>
        </Article>
        <SubmitContainer>
          <SubmitBtn value="Buy now!" />
        </SubmitContainer>
      </Footer>
    </CartContainer>
  );
}
export default indexCart;

const CartContainer = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    right: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    border-radius: 8px;
    background-color: #fff;
    z-index: 300;
    height: 95vh;
    h1 {
      text-align: center;
    }
    a {
      text-decoration: none;
      color: #ebebeb;
      background-color: #ff6700;
      border-radius: 20px;
      padding: 1vh 2vw;
      transition: all 0.3s ease;
      &:hover {
        background-color: #f88335;
      }
      &:active {
        background-color: #a55621;
      }
    }
  `,
  Header = styled.header`
    width: 28vw;
    padding: 0 1vw;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    height: 12vh;
    border-bottom: 0.5vh solid #ff6700;
    display: flex;
    align-items: center;
    justify-content: end;
    h3 {
      text-align: start;
      font-family: "Poppins", monospace;
      font-size: 1.5rem;
      color: #ff6700;
      width: 18vw;
    }
    a {
      font-family: "Poppins", monospace;
      width: 5vw;
      background-color: transparent;
      color: #2e2e2e;
      width: max-content;
      padding: 0;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        color: #222;
        background-color: transparent;
      }
    }
    p {
      transition: all 0.5s ease;
      cursor: pointer;
      &:hover {
        color: #222;
        padding: 0 2vw;
        background-color: #ff6700;
      }
    }
  `;
const Img = styled.img`
  height: 4vh;
  width: 4vw;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 1;
  }
`;
const ItemContainer = styled.main`
    height: 66vh;
    overflow: auto;
    scrollbar-gutter: stable;
  `,
  Footer = styled.footer`
    height: 13vh;
    width: 26vw;
    padding: 0 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: 0.5vh solid #ff6700;
  `,
  Article = styled.article`
    height: 5vh;
    align-items: center;
    display: flex;
    justify-content: space-between;
    p {
      font-family: "Poppins", monospace;
    }
  `,
  SubmitContainer = styled.article`
    width: 10vw;
    height: 7vh;
    text-align: center;

    @media (min-width: 1224px) {
      width: 28vw;
    }
  `,
  SubmitBtn = styled.input`
    margin: auto 0;
    font-family: "Poppins", monospace;
    font-weight: 500;
    color: #ff6700;
    outline: 2px solid #ff6700;
    font-weight: 700;
    border-radius: 8px;
    width: 20vw;
    height: 6vh;
    padding: 0 2vw;
    text-align: center;
    border: 0;
    background-color: transparent;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);

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
