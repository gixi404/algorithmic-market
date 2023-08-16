import rata from "../../img/rata.jpg";
import styled from "styled-components";

function Course({ dataCourse }) {
  return (
    <CourseContainer>
      <Img src={rata} alt="img course" />
      <NameCourse>{dataCourse.name}</NameCourse>
      <p
        style={{
          padding: "0 1rem",
          fontFamily: "Poppins",
          fontWeight: "400",
          fontSize: "0.9rem",
          textAlign: "start",
        }}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean gravida
        ultrices justo eu pretium. Ut quis ipsum nec ligula fringilla
      </p>
      <p
        style={{
          padding: "0 1rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "15px",
          fontFamily: "Poppins",
          fontWeight: "300",
          color: "#353535",
          columnGap: "5px",
          fontSize: "0.9rem",
        }}
      >
        <span
          style={{
            fontSize: "1.5rem",
          }}
        >
          🕓
        </span>
        Tiempo estimado: 90s
      </p>

      <BuyBtn>Buy</BuyBtn>
    </CourseContainer>
  );
}

export default Course;

const CourseContainer = styled.div`
  background-color: #ebebeb;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: start;
  border-radius: 8px;
  padding: 0;
`;

const NameCourse = styled.p`
  font-size: 1.5rem;
  color: black;
  font-family: "Poppins", monospace;
  font-weight: 500;
  padding: 1rem;
`;

const Img = styled.img`
  width: 300px;
  height: 120px;
  object-fit: cover;
  object-position: center;
  border-radius: 8px 8px 0 0;
`;

const BuyBtn = styled.button`
  position: relative;
  font-family: "Poppins", monospace;
  font-weight: 500;
  font-size: 3rem;
  width: 80%;
  height: 40px;
  padding: 8px 15px;
  margin-left: 1.8rem;
  margin-top: 1rem;
  font-size: 16px;
  color: #ff6700;
  outline: 2px solid #ff6700;
  border-radius: 5px;
  background-color: transparent;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  overflow: hidden;
  border: none;

  &:hover {
    cursor: pointer;
    color: #fff;
    scale: 1.1;
    box-shadow: 0 0px 20px rgba(193, 163, 98, 0.4);
    outline: none;
    border: none;
    background-color: #ff6700;
  }
`;
