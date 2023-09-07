import { Link } from "react-router-dom";
import styled from "styled-components";

function ArrowBack(props) {
  const { route } = props;
  return (
    <Container>
      <Link to={route}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="40"
          viewBox="0 0 60 44"
          fill="none"
        >
          <path
            d="M22 2L2 21.9999L22 42"
            stroke="white"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M58.0129 22.0002H2.55981"
            stroke="white"
            strokeWidth="3"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Link>
    </Container>
  );
}

export default ArrowBack;

const Container = styled.div`
  width: 80vw;
  text-align: start;

  @media (max-width: 992px) {
    width: 90vw;
  }

  @media (max-width: 576px) {
    width: 100vw;
  }
`;
