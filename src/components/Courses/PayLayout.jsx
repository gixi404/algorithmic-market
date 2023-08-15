import { useState, useEffect } from "react";
import styled from "styled-components";

function PayLayout({ courseSelected, coursedetails }) {
  const dataToFetch = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer yourAccessToken",
    },
    body: JSON.stringify(courseSelected(coursedetails)),
  };

  const [buyUrl, setBuyUrl] = useState("");

  const handleBuy = async () => {
    const res = await fetch(
      "http://localhost:3001/create-checkout-session",
      dataToFetch
    );
    const data = await res.json();
    setBuyUrl(data);
  };

  useEffect(() => {
    if (buyUrl) {
      window.location.href = buyUrl;
    }
  }, [buyUrl]);

  return (
    <Container>
      <Button onClick={() => handleBuy()}>
        <ButtonWrapper>
          <Text>Buy Now</Text>
          <Icon>
            <svg
              viewBox="0 0 16 16"
              className="bi bi-cart2"
              fill="currentColor"
              height="16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"></path>
            </svg>
          </Icon>
        </ButtonWrapper>
      </Button>
    </Container>
  );
}
export default PayLayout;

const Container = styled.div`
  margin: 2%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  --width: 100px;
  --height: 35px;
  --tooltip-height: 35px;
  --tooltip-width: 90px;
  --gap-between-tooltip-to-button: 18px;
  --button-color: #111;
  --tooltip-color: #fff;
  width: var(--width);
  height: var(--height);
  background: var(--button-color);
  position: relative;
  text-align: center;
  border-radius: 0.45em;
  font-family: "Arial";
  -webkit-transition: background 0.3s;
  transition: background 0.5s;
  &:hover {
    background: var(--button-color);
    top: -100%;
  }
  &:active {
    background-color: #333;
    scale: 0.9;
  }
  &:hover:before,
  :hover:after {
    opacity: 1;
    visibility: visible;
  }
  &:hover:after {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button) - 20px);
  }
  &:hover:before {
    bottom: calc(var(--height) + var(--gap-between-tooltip-to-button));
  }
`;
const Text = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  top: 0;
  -webkit-transition: top 0.5s;
  transition: top 0.5s;
`;
const ButtonWrapper = styled.div`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  &:hover div {
    top: -100%;
  }
  &:hover span {
    top: 0;
  }
`;
const Icon = styled.span`
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  color: #fff;
  -webkit-transition: top 0.5s;
  transition: top 0.5s;
  top: 100%;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  svg {
    width: 24px;
    height: 24px;
  }
`;
