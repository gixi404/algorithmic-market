import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function BuyBtn({ dataCourse }) {
    const { isAuthenticated } = useAuth0()
    return (
        <>
            <Button>
                {isAuthenticated && dataCourse.name === "Course Initial" ? (<Link to="/mycourse">bought</Link>) : (<Link to="/mycourses" >buy</Link>)}
            </Button>
        </>
    )
}

export default BuyBtn;

const Button = styled.button`
position: relative;
font-family: "Poppins", monospace;
font-weight: 500;
font-size: 3rem;
width: 80%;
height: 40px;
color: #ff6700;
padding: 8px 15px;
margin-left: 1.8rem;
margin-top: 1rem;
font-size: 16px;
outline: 2px solid #ff6700;
border-radius: 5px;
background-color: transparent;
transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
overflow: hidden;
border: none;
a{
  text-decoration: none;
  color: #ff6700;
  transition: all .5s ease;
}
&:hover {
  cursor: pointer;
  color: #fff;
  scale: 1.1;
  box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
  outline: none;
  border: none;
  background-color: #ff6700;
  a{
    color: #fff;
  }
}
`;