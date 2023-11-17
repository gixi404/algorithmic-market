import { Link, useParams } from "react-router-dom";
import { useMyContext } from "../Context";
import AddButton from "../Courses/AddButton.jsx";
import { CloseCartSVG } from "../svgs.jsx";
import styled from "styled-components";

function DetailsCourse() {
  const { courseSelected, allCourses } = useMyContext(),
    { coursedetails } = useParams();

  return (
    <Container>
      <Details>
        <Link to="/">
          <CloseCartSVG />
        </Link>

        <Title onClick={() => console.log(pija)}>
          {allCourses[coursedetails]?.name}
        </Title>

        <Article>
          <NameSection>Descripción</NameSection>
          <Description>{allCourses[coursedetails]?.description}</Description>
        </Article>

        <List>
          <NameSection>Clases</NameSection>

          {allCourses[coursedetails]?.classes.map(_class => (
            <li key={_class.id}>{_class.name}</li>
          ))}
        </List>

        <AddButton courseSelected={courseSelected(coursedetails)} />
      </Details>
    </Container>
  );
}

export default DetailsCourse;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 999;
    background-color: transparent;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: default;
    text-decoration: none;
    color: inherit;
    backdrop-filter: blur(5px);
    @media (max-width: 576px) {
      backdrop-filter: none;
      background-color: #ebebeb;
    }
  `,
  Details = styled.section`
    background-color: #ebebeb;
    position: fixed;
    padding-top: 2em;
    width: 80vw;
    height: 80vh;
    overflow-y: visible;
    max-width: 700px;
    border-radius: 8px;
    border-bottom: 5px solid #ff6700;
    border-right: 5px solid #ff6700;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    row-gap: 2em;
    button {
      margin: 2vh 0;
    }
    @media (max-width: 576px) {
      padding-top: 5em;
      border-radius: 0;
      border: 0;
      background-color: transparent;
      width: 90%;
      min-height: 100vh;
    }
  `,
  Title = styled.h3`
    width: 100%;
    text-align: center;
    color: #ff6700;
    text-transform: uppercase;
    font-size: calc(28px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  `,
  Article = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    row-gap: 0.5em;
    width: 85%;
  `,
  NameSection = styled.h4`
    font-family: "Poppins", monospace;
    font-size: calc(20px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
    color: #ff6700;
    text-align: center;
    width: 100%;
  `,
  Description = styled.p`
    text-align: center;
    width: 100%;
    font-family: "Poppins", monospace;
    font-size: calc(14px + (24 - 16) * ((100vw - 320px) / (1920 - 320)));
  `,
  List = styled.ol`
    width: 50%;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    row-gap: 0.2em;
    @media (max-width: 576px) {
      width: 70%;
    }
  `;
