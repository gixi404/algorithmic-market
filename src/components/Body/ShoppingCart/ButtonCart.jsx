import { Link } from "react-router-dom";
import IconoSVG from "./ChangeCart";

function ButtonCart() {
  return (
    <Link to="/shoppingcart">
      <IconoSVG width="1.8rem" height="1.8rem" />
    </Link>
  );
}
export default ButtonCart;
