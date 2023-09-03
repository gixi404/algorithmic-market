import { Link } from "react-router-dom";
import { useBuyPetition } from "../../../hooks/useBuyLogic";
import ItemCart from "./ItemCart";
import { useContext } from "react";
import { ContextProps } from "../../Context";
import styled from "styled-components"

function indexCart () {
    
    const { coursesCart, setCoursesCart } = useContext( ContextProps )
    const handleClick = () => {
        setCoursesCart([])
    }
    return (
        <CartContainer>
            <Header>
                <h3>Added to bag</h3>
                <Link to='/'>cerrar</Link>
                <p onClick={handleClick}>trash</p>
            </Header>
            <ItemContainer>
                {coursesCart.map( course => (
                    <ItemCart key={course.id} data={course} />
                ) )}
            </ItemContainer>
            <Footer>
                <Article>
                    <p>Bag Subtotal</p>
                    <strong>$0</strong>
                </Article>
          <SubmitContainer>
            <SubmitBtn value="Buy now!" />
          </SubmitContainer>
            </Footer>
        </CartContainer>
    )
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
    height:95vh;
    h1{
        text-align: center;
    }
    a{
        text-decoration: none;
        color: #ebebeb;
        background-color: #ff6700;
        border-radius: 20px;
        padding: 1vh 2vw;
        transition:  all .3s ease;
        &:hover{
            background-color: #f88335;
        }
        &:active{
            background-color: #a55621;
        }
    }
`;

const Header = styled.header`
 width: 28vw;
 padding: 0 1vw;
 border-top-left-radius: 8px;
 border-top-right-radius: 8px;
 height: 12vh;
 border-bottom: .5vh solid #ff6700;
 display: flex;
 align-items: center;
 justify-content: space-between;
 h3{
    text-align: center;
    font-family: "Poppins", monospace;
    color: #ff6700;
    width: 16vw;
 }
 a{
    font-family: "Poppins", monospace;
    width: 5vw;
    background-color: transparent;
    color: #2e2e2e;
    width: max-content;
    padding: 0 .5vw;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        color: #222;
        background-color: transparent;
        }
   }
 p{
    transition: all .5s ease;
    cursor: pointer;
    &:hover{
        color: #222;
        padding: 0 2vw;
        background-color: #ff6700;
    }
 }
`;

const ItemContainer = styled.main`
    height:66vh ;
    overflow: auto;
    scrollbar-gutter: stable;
`;

const Footer = styled.footer`
    height: 13vh;
    width: 26vw;
    padding: 0 2vw;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    border-top: .5vh solid #ff6700;
`;

const Article = styled.article`
    height: 5vh;
    align-items: center;
    display:flex;
    justify-content: space-between;
    p{
    font-family: "Poppins", monospace;
    }
`;

const SubmitContainer = styled.article`
    width: 10vw;
    height: 7vh;
    text-align: center;

    @media (min-width: 1224px) {
      width: 28vw;
    }
`

const SubmitBtn = styled.input`
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
