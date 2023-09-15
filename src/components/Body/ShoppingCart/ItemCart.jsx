import { useContext } from "react";
import { ContextProps } from "../../Context";
import courseImg from "../../../img/course-img.jpg";
import styled from "styled-components";

function ItemCart(props) {
  const { data } = props,
    { removeCart } = useContext(ContextProps);

  const handleClick = () => removeCart(data);

  return (
    <Item>
      <IMG src={courseImg} alt="curso imágen" />
      <Article>
        <div>
          <h3>{data.name}</h3>
          <p>
            <strong>${data.cash}</strong>
          </p>
        </div>
        <p onClick={handleClick}>Borrar</p>
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
  width: 27vw;
  display: flex;
  font-family: "Poppins", monospace;
  align-items: center;
  justify-content: space-around;
  box-shadow: 1px 1px 3px #ff6700;
  border-radius: 8px;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const IMG = styled.img`
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
    }
  `;
