import { Link } from "react-router-dom";
import { useMyContext } from "../Context";
import styled from "styled-components";

function AddButton(props) {
  const { courseSelected } = props,
    { setCoursesCart, coursesCart } = useMyContext();

  function addCart() {
    const indexCart = coursesCart.findIndex(
      item => item.id == courseSelected.id
    );

    if (indexCart < 0) {
      setCoursesCart(prevState => [...prevState, courseSelected]);
    }
  }

  return (
    <Container>
      <Btn to="/shoppingcart" onClick={addCart}>
        ¡Comprar!
      </Btn>
    </Container>
  );
}
export default AddButton;

const Container = styled.button`
    border: none;
    display: flex;
    width: 60vw;
    max-width: 350px;
    height: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  Btn = styled(Link)`
    font-family: "Poppins", monospace;
    font-weight: 500;
    color: #ff6700;
    background-color: transparent;
    width: 80%;
    height: 100%;
    font-size: 16px;
    text-align: center;
    outline: 2px solid #ff6700;
    text-decoration: none;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
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
