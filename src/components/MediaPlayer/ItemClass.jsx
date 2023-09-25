import styled from "styled-components";

function ItemClass(props) {
  const { item, selectClassManually, numberClass } = props,
    itemId = Number(item.id) - 1;

  if (itemId === numberClass) {
    return <SameClass>{item.name}</SameClass>;
  } else {
    return (
      <NameClass onClick={() => selectClassManually(itemId)}>
        {item.name}
      </NameClass>
    );
  }
}

export default ItemClass;

const NameClass = styled.p`
    text-decoration: none;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.1em;
    color: #000;
    transition-duration: 0.1s;

    &:hover {
      cursor: pointer;
      color: #ff6700;
    }
  `,
  SameClass = styled.p`
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.1em;
    color: #ff6700;
    transition-duration: 0.1s;

    &:hover {
      cursor: default;
    }
  `;
