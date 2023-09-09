import styled from "styled-components";

function ItemClass(props) {
  const { item, selectClassManually, numberClass } = props;

  if (item.id === numberClass) {
    return (
      <SameClass onClick={() => selectClassManually(item.id, false)}>
        {item.name}
      </SameClass>
    );
  } else {
    return (
      <NameClass onClick={() => selectClassManually(item.id, true)}>
        {item.name}
      </NameClass>
    );
  }
}

export default ItemClass;

const NameClass = styled.p`
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
      cursor: pointer;
    }
  `;
