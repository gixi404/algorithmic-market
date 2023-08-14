import styled from "styled-components";

function Banner() {
  return (
    <BannerContainer>
      <h3>Convertite en Trader Profesional</h3>
      <p>¿Querés crecer económicamente?</p>
      <p>¿Obtener un ingreso extra?</p>
      <p>
        En Trading Master te mostramos cómo. No es magia, es simplemente saber
        mover el dinero invirtiéndolo inteligentemente.En Academia Forex estamos
        orgullosos de ofrecer una experiencia educativa flexible, personalizada
        y de alta calidad para todos y cada uno de los estudiantes.
      </p>
    </BannerContainer>
  );
}

export default Banner;

const BannerContainer = styled.div`
  background-color: #457b9d;
  width: 90%;
  height: 380px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  row-gap: 2rem;
  text-align: center;
`;
