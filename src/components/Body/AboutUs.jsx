import styled from "styled-components";

function AboutUs() {
  return (
    <AboutUsContainer id="aboutUs">
      <h4>About us?</h4>
      <p style={{ width: "90%" }}>
        At Academia Forex, we offer the best online learning platform because
        students are always the spirit that mobilizes us. It is because of that
        the learning program is easily adapted and customized to meet the needs
        of every student, no matter where neither their level of knowledge is
        found. With a passionate team, We have assistance by phone, email or
        video sessions so that learn this skill and become a professional
        trader.
      </p>
    </AboutUsContainer>
  );
}

export default AboutUs;

const AboutUsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 400px;
  background-color: #c0c0c0;
`;
