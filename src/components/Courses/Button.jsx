import styled from "styled-components";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

function BuyBtn({ course, title, url }) {
  const { isAuthenticated } = useAuth0()
  return (
    <Button >
      {isAuthenticated && course.id === 0
        ? (<Link to="/mycourses">view</Link>)
        : (<Link to={`${url}`}>{`${title}`}</Link>)
      }
    </Button >
  )
}
BuyBtn.defaultProps = {
  course: {
    name: 'Jonh Doe',
    id: null
  }
}
export default BuyBtn;

const Button = styled.button`
  font-family: "Poppins", monospace;
  font-weight: 500;
  color: #ff6700;
  width: 80%;
  height: 40px;
  font-size: 16px;
  outline: 2px solid #ff6700;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  border: none;
  a{
    display: block;
    text-decoration: none;
    color: #ff6700;
    width: 100%;
    height: 40px;
    transition: all .5s ease;
    line-height: 40px;
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
      scale: 1.1;
    }
  }
`;