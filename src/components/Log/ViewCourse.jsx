import { useMyContext } from "../Context";
import { Link } from "react-router-dom";
import styled from "styled-components";

function ViewCourse(props) {
  const { url } = props,
    { setProtectedRoute } = useMyContext();

  function handleClick() {
    setProtectedRoute(true);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }

  //!cantidad de libros leídos
  
  return (
    <Button onClick={handleClick}>
      <Link to={url}>Ver</Link>
    </Button>
  );
}

export default ViewCourse;

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
  a {
    display: block;
    text-decoration: none;
    color: #ff6700;
    width: 100%;
    height: 40px;
    transition: all 0.5s ease;
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
    a {
      color: #fff;
      scale: 1.1;
    }
  }
`;
