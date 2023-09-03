import { Link } from 'react-router-dom'
import styled from 'styled-components'
import IconoSVG from './ChangeCart';

function ButtonCart() {
  return (
    <SpecialLink to="/shoppingcart">
      <IconoSVG width="5vw" height="5vh" />
    </SpecialLink>
  );
}
export default ButtonCart;

const Svg = styled.svg`
  transition: all 1s ease;
  path {
    transition: all 0.5s ease;
  }
  &:hover {
    transform: rotate(180deg);
    path {
      fill: #5e5d5d;
    }
  }
  &:active {
    transform: rotate(-180deg);
    path {
      fill: #181818;
    }
  }
`;
const SpecialLink = styled(Link)`
`;
