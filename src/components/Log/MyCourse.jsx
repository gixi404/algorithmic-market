import { Link } from "react-router-dom";
import ratadOs from "../../img/rata.jpg";
import styled from "styled-components";
import BuyBtn from "../Courses/Button";


function MyCourse(props) {
  const { dataCourse } = props;
  const title = "View";
  const id = dataCourse.id;
  const url = `/mycourses/${id}`;

  return (
    <>
      <CourseContainer>
        <Img src={ratadOs} alt="img course" />
        <NameCourse>{dataCourse.name}</NameCourse>
        <DescriptionCard>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida
          ultrices justo eu pretium. Ut quis ipsum nec ligula fringilla
        </DescriptionCard>
        <TimeCard>
          <Span>🕓</Span>
          Tiempo estimado: 90hr
        </TimeCard>
        <ButtonContainer>
          <BuyBtn course={dataCourse} title={title} url={url} />
        </ButtonContainer>
      </CourseContainer></>
  );
}

export default MyCourse;

const CourseContainer = styled.div`
  background-color: #ebebeb;
  width: 22.5vw;
  height: max - content;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-radius: 8px;
  padding: 0;
  @media(max-width: 1060px) {
    width: 25vw;
    overflow: hidden;
  }
  @media(max-width: 850px) {
    margin: 2vh 0;
    width: 80vw;
  }
`;
const NameCourse = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: "Poppins", monospace;
  font-weight: 500;
  padding: 1rem;
  @media(max-width: 940px) {
    padding-bottom: 0.3rem;
    font-size: 1.3rem;
  }
  @media(max-width: 850px) {
    font-size: 1.7rem;
    padding: 1rem;
  }
`;
const Img = styled.img`
  width: 22.5vw;
  height: 21vh;
  object-fit: cover;
  object-position: center;
  border-radius: 8px 8px 0 0;
  @media(max-width: 1060px) {
    width: 25vw;
  }
  @media(max-width: 850px) {
    width: 80vw;
  }
`;
const DescriptionCard = styled.p`
  padding: 0 1rem;
  font-family: "Poppins";
  font-weight: 400;
  font-size: 0.9rem;
  text-align: start;
  @media(max-width: 1060px) {
    font-size: 0.77rem;
  }
  @media(max-width: 850px) {
    font-size: 1rem;
  }
`;
const TimeCard = styled.p`
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 2.5vh;
  font-family: Poppins;
  font-weight: 300;
  color: #353535;
  column-gap: 5px;
  font-size: 0.9rem;
  @media(max-width: 1060px) {
    font-size: 0.77rem;
    margin-top: 1vh;
  }
`;
const Span = styled.span`
  font-size: 1.5rem;
  @media(max-width: 1060px) {
    font-size: 1rem;
  }
`;
const ButtonContainer = styled.div`
  height: 7vh;
  width: 22.5vw;
  display: flex;
  margin-top: 1rem;
  justify-content: center;
  @media(max-width: 1060px) {
    width: 25vw;
  }
  @media(max-width: 850px) {
    width: 80vw;
  }
`;

// return (

//   <CourseContainer>
//     <Img src={rata} alt="img course" />
//     <NameCourse>{dataCourse.name}</NameCourse>
//     <p
//       style={{
//         padding: "0 1rem",
//         fontFamily: "Poppins",
//         fontWeight: "400",
//         fontSize: "0.9rem",
//         textAlign: "start",
//       }}
//     >
//       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida
//       ultrices justo eu pretium. Ut quis ipsum nec ligula fringilla
//     </p>
//     <p
//       style={{
//         padding: "0 1rem",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         marginTop: "15px",
//         fontFamily: "Poppins",
//         fontWeight: "300",
//         color: "#353535",
//         columnGap: "5px",
//         fontSize: "0.9rem",
//       }}
//     >
//       <span
//         style={{
//           fontSize: "1.5rem",
//         }}
//       >
//         🕓
//       </span>
//       Tiempo estimado: 90s
//     </p>

//     <BuyBtn>Buy</BuyBtn>
//   </CourseContainer>
// );
// }

// export default Course;
