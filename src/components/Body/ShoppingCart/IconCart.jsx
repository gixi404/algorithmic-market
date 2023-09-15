import { Link } from "react-router-dom";
import { IconSVG } from "../../svgs";

function IconCart() {
  return (
    <Link to="/shoppingcart">
      <IconSVG width="1.8rem" height="1.8rem" />
    </Link>
  );
}
export default IconCart;
