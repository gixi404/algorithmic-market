import { Link } from "react-router-dom";
import styled from "styled-components"

function indexCart () {
    return (
        <CartContainer>
            <Link to="/">Back</Link>
            <h1>this is the cart.. or will be it</h1>
            <span></span>
        </CartContainer>
    )
}
export default indexCart

const CartContainer = styled.div`
    display: flex;
    position: fixed;
    top: 5vh;
    right: 0;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 30vw;
    background-color: #fff;
    z-index: 300;
    height:90vh;
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