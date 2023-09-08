import styled from "styled-components";

function ItemClass(props) {
  const { item, selectClassManually } = props;

  return <P onClick={() => selectClassManually(item.id)}>{item.name}</P>;
}

export default ItemClass;

const P = styled.p`
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 1.1rem;
  color: #000;
  transition-duration: 0.1s;

  &:hover {
    cursor: pointer;
    color: #ff6700;
  }
`;
