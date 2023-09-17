import Profile from "./Profile";
import styled from "styled-components";

function PopupProfile() {
  return (
    <Container>
      <Profile />
    </Container>
  );
}

export default PopupProfile;

const Container = styled.section`
  width: 280px;
  height: 150px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 1em;
  padding-bottom: 1em;
  border-radius: 0.8em;
  border: 2px solid #ff6700;
  margin-bottom: 1em;
`;
