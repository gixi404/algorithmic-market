import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProps } from "../Context";
import styled from "styled-components";

function PayLayout({ courseSelected }) {
  const { setCoursesCart, coursesCart } = useContext(ContextProps),
    title = "Buy Now!";

  function addCart() {
    const indexCart = coursesCart.findIndex(
      item => item.id == courseSelected.id
    );

    if (indexCart < 0) {
      setCoursesCart(prevState => [...prevState, courseSelected]);
    }
  }
  const handleClick = () => addCart();

  /*
  const { setCoursesCart, coursesCart } = useContext( ContextProps )
  const { buyUrl } = useBuyPetition( { courseSelected } );
  const url = buyUrl;
  useEffect( () => {
    setCoursesCart( [courseSelected] )
    console.log(coursesCart)
  }, [buyUrl] ) 
  */

  return (
    <Container>
      <Btn to="/shoppingcart" onClick={handleClick}>
        {title}
      </Btn>
    </Container>
  );
}
export default PayLayout;

const Container = styled.div`
    position: relative;
    display: flex;
    height: max-content;
    width: 20vw;
    justify-content: center;
    align-items: center;
  `,
  Btn = styled(Link)`
    font-family: "Poppins", monospace;
    font-weight: 500;
    color: #ff6700;
    width: 80%;
    height: 40px;
    font-size: 16px;
    text-align: center;
    outline: 2px solid #ff6700;
    text-decoration: none;
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
