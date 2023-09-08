import { useContext } from "react";
import { ContextProps } from "../../Context";
import Img from "../../../img/pexels-alesia-kozik-6770610 2.png";
import styled from "styled-components";

function ItemCart(props) {
  const { data } = props,
    { removeCart } = useContext(ContextProps);

  const handleClick = () => removeCart(data);

  return (
    <Item>
      <IMG src={Img} alt="nose" />
      <Article>
        <div>
          <h3>{data.name}</h3>
          <p>
            <strong>${data.cash}</strong>
          </p>
        </div>
        <p onClick={handleClick}>delete</p>
      </Article>
    </Item>
  );
}
export default ItemCart;

const Item = styled.article`
    border: 0;
    margin: 1.5vh 0;
    background-color: #fff5ef;
    height: 20vh;
    width: 28vw;
    display: flex;
    font-family: "Poppins", monospace;
    align-items: center;
    justify-content: space-around;
    box-shadow: 1px 1px 3px #ff6700;
    border-radius: 8px;
  `,
  IMG = styled.img`
    height: 16vh;
    width: 10vw;
  `,
  Article = styled.article`
    height: 14vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    div {
      height: 7vh;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
    }
    p {
      background-color: transparent;
      color: #2e2e2e;
      width: max-content;
      padding: 0 0.5vw;
      cursor: pointer;
      transition: all 0.5s ease;
      &:hover {
        color: #222;
        background-color: transparent;
        text-decoration: underline;
      }
    }
  `;
