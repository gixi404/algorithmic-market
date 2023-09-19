import { useMyContext } from "../../Context";
import courseImg from "../../../img/course-img.jpg";
import styled from "styled-components";

function ItemCart(props) {
  const { data } = props,
    { removeCart } = useMyContext();

  const handleClick = () => removeCart(data);

  return (
    <Item>
      <IMG src={courseImg} alt="curso imágen" />
      <Article>
        <div>
          <h3>{data.name}</h3>6
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
    background-color: #e8e1e1;
    height: 20vh;
    width: 90%;
    display: flex;
    font-family: "Poppins", monospace;
    align-items: center;
    justify-content: space-between;
    box-shadow: 1px 1px 3px #ff6700;
    border-radius: 8px;
    transition: all 0.5s ease;
    cursor: pointer;
  `,
  IMG = styled.img`
    height: 100%;
    width: 45%;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  `,
  Article = styled.article`
    height: 14vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    padding-right: 1.3em;
    width: 55%;
    div {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: end;
      flex-direction: column;
      text-align: end;
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
