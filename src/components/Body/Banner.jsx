import styled from "styled-components";
//Foto de Anna Nekrashevich: https://www.pexels.com/es-es/foto/persona-sosteniendo-un-telefono-inteligente-6801874/
import example from "../../img/rols.jpg";

function Banner() {
  return (
    <BannerContainer>
      <TextContainer>
        "Keep losses small and gains big"
        <span>William J. O'Neil</span>
      </TextContainer>
      <Img src={example} />
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.article`
  width: 80vw;
  height: 53vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #e9edc9;
  background-color: rgba(233, 237, 201, 0.2);
  border-radius: 8px;
  text-align: center;
  @media (max-width: 850px) {
    background-image: url(${example});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: right;
  }
  @media (max-width: 690px) {
    height: 40vh;
  }
  @media (max-width: 440px) {
    height: 25vh;
  }
  @media (max-width: 230px) {
    display: none;
  }
`;

const TextContainer = styled.p`
  height: 53vh;
  width: 35vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  font-size: 2.3rem;
  color: #fff;
  letter-spacing: 0.8px;
  font-family: "Poppins", monospace;
  font-weight: 500;
  span {
    margin-right: 10px;
    font-size: 1.8rem;
  }
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
    span{
      font-size: 1rem;
    }
  }
`;

const Img = styled.img`
  height: 53vh;
  width: 45vw;
  object-fit: cover;
  object-position: center;
  border-radius: 0 8px 8px 0;
  filter: brightness(80%);
  @media (max-width: 850px) {
    display: none;
  }
`;
