import styled from "styled-components";
//Foto de Anna Nekrashevich: https://www.pexels.com/es-es/foto/persona-sosteniendo-un-telefono-inteligente-6801874/
import example from "../../img/rols.jpg";

function Banner() {
  return (
    <BannerContainer>
      <TextContainer>
        "Keep losses small and gains big"
        <span
          style={{
            marginRight: "10px",
            fontSize: "1.8rem",
          }}
        >
          William J. O'Neil
        </span>
      </TextContainer>
      <Img src={example} />
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  width: 80vw;
  height: 53vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 5px #e9edc9;
  background-color: rgba(233, 237, 201, 0.2);
  border-radius: 8px;
  row-gap: 2rem;
  text-align: center;
`;

const TextContainer = styled.p`
  height: 53vh;
  width: 40vw;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: end;
  font-size: 2.3rem;
  color: #fff;
  letter-spacing: 0.8px;
  font-family: "Poppins", monospace;
  font-weight: 500;
`;

const Img = styled.img`
  height: 53vh;
  width: 60vw;
  object-fit: cover;
  object-position: center;
  border-radius: 0 8px 8px 0;
  filter: brightness(80%);
`;
