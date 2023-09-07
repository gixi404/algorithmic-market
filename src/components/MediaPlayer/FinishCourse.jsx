import { useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

function FinishCourse(props) {
  const { setLoadContent } = props;

  useEffect(() => setLoadContent(false), []);

  return (
    <FinishLetter>
      <Title>
        <span>¡Felicidades por completar con éxito el curso! </span>
        Te invitamos a continuar avanzando en tu camino hacia la excelencia
        financiera con nuestro próximo curso.
      </Title>
      <Link
        to="/mycourses"
        style={{ textDecoration: "none", color: "#ff6700" }}
      >
        <MyCoursesBtn>Ir a mis cursos</MyCoursesBtn>
      </Link>
    </FinishLetter>
  );
}

export default FinishCourse;

const FinishLetter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 3rem;
    background-color: #fff;
    width: 80vw;

    height: calc((9 / 16) * 80vw);

    @media (max-width: 992px) {
      width: 90vw;
    }

    @media (max-width: 576px) {
      width: 100vw;
    }

    @media (max-width: 992px) {
      height: calc((9 / 16) * 90vw);
    }

    @media (max-width: 576px) {
      height: calc((9 / 16) * 100vw);
    }
  `,
  Title = styled.p`
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 2rem;
    text-align: center;
    color: #000;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;

    span {
      color: #ff6700;
      font-family: "Poppins", sans-serif;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  `,
  MyCoursesBtn = styled.button`
    display: flex;
    width: 30vw;
    padding: 10px 18px;
    border-radius: 12px;
    border: 2px solid #ff6700;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #ff6700;
    font-family: "Poppins", sans-serif;
    font-weight: 400;
    font-size: 1.3rem;
    transition-duration: 0.2s;

    &:hover {
      transform: scale(0.955);
      cursor: pointer;
    }
  `;
