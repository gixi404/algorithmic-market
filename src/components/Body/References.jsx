import styled from "styled-components";
import userExample from "../../img/user-example.jpg";
import baltasarImg from "../../img/urki.webp";
import feliImg from "../../img/feliImg.jpeg";
import davidImg from "../../img/davidImg.jpeg";
import camiImg from '../../img/camiImg.jpeg'

function References() {
  const references = [
    {
      id: 1,
      img: camiImg,
      name: "Camila Benavidez",
      profession: "Diseñadora Gráfica",
      testimony:
        '"Lo recomiendo para el que disponga de tiempo y ganas para conseguir ingresos extra."',
    },
    {
      id: 2,
      img: davidImg,
      name: "David Zarate",
      profession: "Desarrollador Freelancer",
      testimony:
        '"Buenos cursos y excelentes explicaciones. Perfecto para aprender algo nuevo."',
    },
    {
      id: 3,
      img: baltasarImg,
      name: "Baltasar Pascual",
      profession: "Ingeniero en Sistemas",
      testimony:
        '"Es una gran plataforma que me permitió incursionar en el mundo del trading, lo recomiendo ampliamente."',
    },
    {
      id: 4,
      img: feliImg,
      name: "Felipe Correa",
      profession: "Estudiante de Abogacía",
      testimony:
        '"Con ayuda de estos cursos me pude pagar la universidad, lo recomiendo bastante para los que están empezando o incluso para los que tiene conocimientos previos."',
    },
  ];
  return (
    <>
      <Title>Testimonios</Title>
      <List id="refs">
        {references.map(reference => (
          <Div key={reference.id}>
            <Img src={reference.img} alt={reference.name} />
            <Name>{reference.name}</Name>
            <Profession>{reference.profession}</Profession>
            <p>{reference.testimony}</p>
          </Div>
        ))}
      </List>
    </>
  );
}

export default References;

const Title = styled.h3`
    padding-top: 2rem;
    font-family: "Poppins", monospace;
    font-size: calc(26px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    width: 80vw;
    text-align: start;
    color: #fff;
    margin-top: 2em;
    margin-bottom: 1.5em;
    font-weight: normal;
  `,
  List = styled.ul`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5em;
    width: 80vw;
    flex-wrap: wrap;
    max-width: 1024px;
    row-gap: 2em;
    column-gap: 2em;
    @media (max-width: 1024px) {
      flex-direction: column;
      width: 100vw;
    }
  `,
  Div = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 40%;
    height: 300px;
    background-color: #ffffff;
    color: #000000;
    border-radius: 0.5em;
    padding: 2em;
    row-gap: 0.3em;
    border-bottom: 3px solid #ff6700;
    border-right: 3px solid #ff6700;
    font-family: "Poppins", monospace;
    @media (max-width: 1024px) {
      width: 80%;
      height: auto;
      max-width: 550px;
    }
    @media (max-width: 576px) {
      border-radius: 0;
    }
  `,
  Img = styled.img`
    width: 125px;
    height: 125px;
    border-radius: 100%;
    margin-bottom: 0.8em;
    border: 1.8px solid #ff6700;
    object-fit: cover;
    object-position: center;
  `,
  Name = styled.p`
    font-size: calc(16px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  `,
  Profession = styled.p`
    font-size: calc(20px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #ff6700;
    font-style: italic;
  `;
