import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { CloseCartSVG, UserSVG, CartSVG } from "../../svgs";
import styled from "styled-components";
import NavHeader from "./NavHeader";

function Menu(props) {
  const { menuActive, setMenuActive } = props,
    { isAuthenticated } = useAuth0();

  return (
    <Container>
      <Content>
        {isAuthenticated && <UserSVG />}
        <Link to="/shoppingcart">
          <CartSVG width="1.8em" height="1.8em" />
        </Link>
        <CloseCartSVG menuActive={menuActive} setMenuActive={setMenuActive} />
      </Content>

      <NavHeader isMobile />
    </Container>
  );
}

export default Menu;

const Container = styled.header`
    min-height: 100px;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;
    background-color: #ffffff;
    border-bottom: 4px solid #ff6700;
    padding-bottom: 1em;
  `,
  Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: row;
    width: 100vw;
    height: 100%;
  `;
