import styled from "styled-components";
//Foto de Anna Nekrashevich: https://www.pexels.com/es-es/foto/persona-sosteniendo-un-telefono-inteligente-6801874/
import example from "../../img/pexels-anna-nekrashevich-6801874.jpg";

function Banner() {
  return (
    <BannerContainer>
      <TextContainer>
        <h3>Become a Professional Trader</h3>
        <p>Do you want to grow financially?</p>
        <p>Get extra income?</p>
        <p>
          At Trading Master we show you how. It's not magic, it's just knowing
          move money by investing it intelligently. In Forex Academy
          we are proud to offer a flexible educational experience,
          personalized and high quality for each and every one of the
          students.
        </p>
      </TextContainer>
      <Img src={example} />
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  background-color: #457b9d;
  width: 70%;
  height: 380px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  row-gap: 2rem;
  text-align: center;
`;

const TextContainer = styled.p`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  height: 100%;
  width: 50%;
  border-radius: 0 8px 8px 0;
  filter: brightness(80%);
`;
