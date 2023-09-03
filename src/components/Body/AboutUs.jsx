import Imgg from "../../img/pito.jpg";
import styled from "styled-components";

function AboutUs() {
  return (
    <Container id="aboutUs">
      <AboutUsContainer>
        <Text>
          <Title>About Us</Title>
          <p>
            At{" "}
            <span style={{ fontStyle: "italic", color: "#ff6700" }}>
              King Of The Market
            </span>
            , we're not just a company we're a community of passionate traders
            dedicated to transforming financial aspirations into reality.
            Established with a vision to empower individuals with the knowledge
            and tools to conquer the world of trading, King Of The Market has
            become a beacon of excellence in the industry.
            <br />
            <br />
            Our mission is simple: to provide top-tier education, cutting-edge
            resources, and unparalleled support to traders of all levels. From
            novices taking their first steps to seasoned professionals seeking
            to refine their skills, we offer a range of meticulously crafted
            courses that cater to diverse needs.
          </p>
        </Text>

        <ImgContainer>
          <Img src={Imgg} />
        </ImgContainer>
      </AboutUsContainer>
    </Container>
  );
}

export default AboutUs;

const Container = styled.section`
    width: 100vw;
    height: auto;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-bottom: 4px solid #ff6700;
    background-color: #ebebeb;
    font-family: "Poppins", monospace;
  `,
  AboutUsContainer = styled.div`
    height: max-content;
    width: 100vw;
    text-align: center;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    border: 0;

    @media (min-width: 320px) {
      width: 80vw;
      padding: 2rem 0;
    }

    @media (min-width: 1024px) {
      padding: 2rem 0;
      justify-content: space-between;
    }
  `,
  Text = styled.article`
    height: max-content;
    width: 40vw;
    display: flex;
    flex-direction: column;
    align-items: start;
    text-align: start;
    justify-content: space-between;

    @media (max-width: 480px) {
      width: 100vw;
      text-align: center;
    }

    @media (max-width: 1024px) {
      width: 100vw;
      text-align: start;
    }
  `,
  Title = styled.p`
    font-size: 2.5rem;

    @media (min-width: 320px) {
      font-size: 2rem;
      padding-bottom: 2rem;
    }
  `,
  ImgContainer = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 350px;
    height: 400px;

    @media (max-width: 1024px) {
      display: none;
    }
  `,
  Img = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 8px;
    border-right: 3px solid #ff6700;
    border-bottom: 3px solid #ff6700;
  `;
