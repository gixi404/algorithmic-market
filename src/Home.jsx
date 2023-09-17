import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import ReactLoading from "react-loading";
import Header from "./components/Body/Header/Header.jsx";
import Banner from "./components/Body/Banner.jsx";
import Courses from "./components/Courses/Courses.jsx";
import AboutUs from "./components/Body/AboutUs.jsx";
import Contact from "./components/Body/Contact.jsx";
import Footer from "./components/Body/Footer.jsx";
import Details from "./components/Courses/DetailsCourse.jsx";
import styled from "styled-components";

function Home() {
  const { isLoading } = useAuth0();

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
      <Routes>
        <Route path="/details/:coursedetails" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Header />
      <Banner />
      <Courses />
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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  HomeContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    width: 100vw;
    height: max-content;
    padding: 0;
    overflow: hidden;
    scrollbar-gutter: stable;
  `;
