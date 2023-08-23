import { useBuyPetition } from "../../hooks/useBuyLogic";
import Btn from './Button'
import styled from "styled-components";

function PayLayout({ courseSelected }) {
  const { buyUrl } = useBuyPetition({ courseSelected })
  const title = 'Buy Now!'
  const url = buyUrl


  return (
    <Container >
      <Btn title={title} url={url ? url : '/'} />
    </Container >
  );
}
export default PayLayout;

const Container = styled.div`
  position: relative;
  display: flex;
  height: max-content;
  width: 20vw;
  justify-content: center;
  align-items: center;
`;