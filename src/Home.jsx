import { useAuth0 } from "@auth0/auth0-react";
import { useContext } from "react";
import { ContextProps } from "./components/Context.jsx";
import ReactLoading from "react-loading";
import Header from "./components/Body/Header.jsx";
import UserIsLogin from "./components/Log/UserIsLogin.jsx";
import Banner from "./components/Body/Banner.jsx";
import Courses from "./components/Courses/Courses.jsx";
import AboutUs from "./components/Body/AboutUs.jsx";
import Contact from "./components/Body/Contact.jsx";
import Footer from "./components/Body/Footer.jsx";
import DetailsCourse from "./components/Courses/CourseDetails.jsx"
import styled from "styled-components";
import Details from './components/Courses/__pruebaDetails.jsx'

function Home() {
  const { isLoading, isAuthenticated } = useAuth0();
  const { courseSelected } = useContext(ContextProps);

  if (isLoading) {
    return (
      <LoadContainer>
        <ReactLoading
          type="bars"
          color="rgb(255, 255, 255)"
          width="250px"
          height="200px"
        />
      </LoadContainer>
    );
  }

  return (
    <HomeContainer>
      <Header />

      {isAuthenticated ? (
        <>
          <UserIsLogin />
          <Courses />
          <Banner />
        </>
      ) : (
        <>
          <Banner />
          <Courses />
          ({courseSelected.length !== 1 ? <Details /> : <Banner /> })
        </>
      )}
      <AboutUs />
      <Contact />
      <Footer />
    </HomeContainer>
  );
}

export default Home;

const LoadContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 100vw;
  height: max-content;
  padding: 0;
  row-gap: 5rem;
  overflow: hidden;
  scrollbar-gutter: stable;
`;
