import { ContextProps } from "../Context";
import { useContext } from "react";
import styled from "styled-components";

function Banner() {
  const { isDesktop } = useContext(ContextProps);

  const Container = styled.article`
      width: 100vw;
      height: ${isDesktop("70vh", "53vh")};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      border-radius: 8px;
      text-align: center;
      border-bottom: 4px solid #ff6700;
    `,
    BannerContainer = styled.div`
      width: ${isDesktop("65vw", "100vw")};
      height: ${isDesktop("40vh", "53vh")};
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
      background-color: ${isDesktop(
        "rgba(235, 235, 235, 0.9)",
        "rgba(235, 235, 235, 0.7)"
      )};
      border-radius: ${isDesktop("8px", "0")};
    `,
    TextContainer = styled.p`
      height: 53vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      color: #000000;
      letter-spacing: 0.8px;
      font-family: "Poppins", monospace;
      font-weight: 500;

      @media (max-width: 850px) {
        width: 80vw;
        color: #1f1f1f;
      }
      @media (max-width: 690px) {
        height: 40vh;
        width: 80vw;
        font-size: 2rem;
        span {
          font-size: 1.6rem;
        }
      }
      @media (max-width: 440px) {
        height: 25vh;
        font-size: 1.4rem;
      }
    `,
    TextSpan = styled.span`
      color: #ff6700;
      font-family: "Poppins", monospace;
      font-weight: 600;
      font-size: 2.3rem;
      text-transform: capitalize;
    `;

  return (
    <Container id="banner">
      <BannerContainer>
        <TextContainer>
          <TextSpan>Unlock your financial potential</TextSpan>
          with cutting-edge trading courses on <b>our platform</b>
        </TextContainer>
      </BannerContainer>
    </Container>
  );
}

export default Banner;
