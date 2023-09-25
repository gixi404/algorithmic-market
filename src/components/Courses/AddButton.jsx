import { Link } from "react-router-dom";
import { useMyContext } from "../Context";
import styled from "styled-components";

function AddButton({ courseSelected }) {
  const { setCoursesCart, coursesCart } = useMyContext(),
    title = "¡Comprar!",
    addCart = () => {
      const indexCart = coursesCart.findIndex(
        item => item.id == courseSelected.id
      );
      if (indexCart < 0) {
        setCoursesCart(prevState => [...prevState, courseSelected]);
      }
    },
    handleClick = () => addCart();

  return (
    <ContainerMobile>
      <BtnMobile to="/shoppingcart" onClick={handleClick}>
        {title}
      </BtnMobile>
    </ContainerMobile>
  );
}
export default AddButton;

const ContainerMobile = styled.div`
    display: flex;
    width: 60vw;
    height: 5vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  BtnMobile = styled(Link)`
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
