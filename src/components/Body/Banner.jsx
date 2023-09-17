import styled from "styled-components";

function Banner() {
  return (
    <Container id="banner">
      <BannerContainer>
        <TextContainer>
          <TextSpan>Libere su potencial financiero</TextSpan>
          con los cursos de trading de <b>Algorithmic Market</b>
        </TextContainer>
      </BannerContainer>
    </Container>
  );
}

export default Banner;

const Container = styled.article`
    width: 100vw;
    height: 70vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    text-align: center;
    border-bottom: 4px solid #ff6700;
    @media (max-width: 800px) {
      height: 53vh;
    }
  `,
  BannerContainer = styled.div`
    width: 80vw;
    height: 53vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    background-color: rgba(235, 235, 235, 0.7);
    border-radius: 8px;

    @media (max-width: 800px) {
      width: 100vw;
      height: 53vh;
      background-color: rgba(235, 235, 235, 0.9);
      border-radius: 0px;
    }
  `,
  TextContainer = styled.p`
    height: 53vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
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
    }
    @media (max-width: 440px) {
      height: 25vh;
    }
  `,
  TextSpan = styled.span`
    color: #ff6700;
    font-family: "Poppins", monospace;
    font-weight: 600;
    font-size: calc(28px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    text-transform: capitalize;
  `;
