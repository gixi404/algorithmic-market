import styled from "styled-components";

function ItemClass(props) {
  const { item, selectClassManually, numberClass } = props,
    itemId = Number(item.id);

  if (itemId === numberClass) {
    return (
      <NameClass style={{ cursor: "default", color: "#ff6700" }}>
        {item.name}
      </NameClass>
    );
  } else {
    return (
      <NameClass onClick={() => selectClassManually(itemId)}>
        {item.name}
      </NameClass>
    );
  }
}

export default ItemClass;

const NameClass = styled.li`
  list-style: none;
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
`;
