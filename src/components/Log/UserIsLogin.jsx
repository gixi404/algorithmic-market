import { Link as Linkk } from "react-router-dom";
import { PiPlayDuotone } from "react-icons/pi";
import exampleImg from "../../img/example.jpg";
import styled from "styled-components";

function UserIsLogin() {
  return (
    <UserIsLoginContainer>
      <TextCourses>
        <Link to="/mycourses">pick up where you left off</Link>
      </TextCourses>

      <ImgContainer>
        <Img src={exampleImg} />
        <Linnk to={`/mycourses`}>
          <PlayBtn />
        </Linnk>
      </ImgContainer>
    </UserIsLoginContainer>
  );
}

export default UserIsLogin;

const UserIsLoginContainer = styled.section`
  box-shadow: 0 0 5px #e9edc9;
  background-color: rgba(233, 237, 201, 0.2);
  text-transform: uppercase;
  width: 80vw;
  height: 50vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 8px;
  @media (max-width:800px){
    height: 30vh;
  }
`;
const TextCourses = styled.p`
  font-size: 2.3rem;
  color: #2b2d42;
  letter-spacing: 0.8px;
  font-family: "Poppins", monospace;
  font-weight: bold;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 40vh;
  width: 40vw;
  @media(max-width:800px){
    display: none;
  }
`;
const Linnk = styled(Linkk)`
  height: 0;
  width: 0;
`;
const Link = styled(Linkk)`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  text-align: start;
  padding: 0 3rem 0 1rem;
  color: #f5f5f5;
`;
const ImgContainer = styled.article`
  height: 50vh;
  width: 40vw;
  border-radius: 0 8px 8px 0;
  position: relative;
  display: flex;
  justify-content: end;
  @media(max-width:800px){
    background-image: url(${exampleImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size:cover ;
    width: 80vw;
    height: 30vh;
  }
`;
const Img = styled.img`
  width: 40vw;
  height: 100%;
  border-radius: 0 8px 8px 0;
  filter: brightness(50%);
  @media(max-width:800px){
    display: none;
  }
`;
const PlayBtn = styled(PiPlayDuotone)`
  position: absolute;
  left: 50%;
  top: 37%;
  transform: translateX(-50%);
  font-size: 5rem;
  color: #f5f5f5;
  transition-duration: 0.2s;
  &:hover {
    scale: 1.1;
    cursor: pointer;
    opacity: 0.7;
  }
`;
