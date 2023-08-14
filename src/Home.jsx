import { useAuth0 } from "@auth0/auth0-react";
import ReactLoading from "react-loading";
import Header from "./components/Header.jsx";
import UserIsLogin from "./components/UserIsLogin.jsx";
import Banner from "./components/Banner.jsx";
import Courses from "./components/Courses.jsx";
import AboutUs from "./components/AboutUs.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import styled from "styled-components";

function Home() {
  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) {
    return (
      <LoadContainer>
        <ReactLoading
          type="bars"
          color="rgb(193, 163, 98)"
          width="250px"
          height="200px"
        />
      </LoadContainer>
    );
  }

  return (
    <HomeContainer>
      <Header />
      {!isAuthenticated && (
        <>
          <Banner />
          <Courses />
        </>
      )}
      {isAuthenticated && (
        <>
          <UserIsLogin />
          <Courses />
          <Banner />
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
  justify-content: center;
  width: 100vw;
  min-height: 100vh;
  row-gap: 5rem;
`;
