import { Link } from "react-router-dom";
import styled from "styled-components"

function indexCart () {
    return (
        <CartContainer>
            <Link to="/">Back Lady</Link>
            <h1>this is the cart.. or will be it</h1>
            <span></span>
        </CartContainer>
    )
}
export default indexCart

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: 100vw;
    margin-top: 10vh;
    height: 90vh;
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