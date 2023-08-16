import styled from "styled-components";

function AboutUs() {
  return (
    <AboutUsContainer id="aboutUs">
      <Text></Text>
      <Img></Img>
    </AboutUsContainer>
  );
}

export default AboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
  row-gap: 2rem;
  text-align: center;
`;
const Text = styled.div`

`
const Img = styled.div`

`;
