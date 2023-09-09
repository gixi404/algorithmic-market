import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import useDataUser from "./hooks/useDataUser.js";
import ReactLoading from "react-loading";
import Header from "./components/Body/Header.jsx";
import UserIsLogin from "./components/Log/UserIsLogin.jsx";
import Banner from "./components/Body/Banner.jsx";
import Courses from "./components/Courses/Courses.jsx";
import AboutUs from "./components/Body/AboutUs.jsx";
import Contact from "./components/Body/Contact.jsx";
import Footer from "./components/Body/Footer.jsx";
import styled from "styled-components";
import Details from "./components/Courses/DetailsCourse.jsx";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer.jsx";
import Success from "./components/Courses/Success.jsx";
import IndexCart from "./components/Body/ShoppingCart/IndexCart.jsx";

function Home() {
  const { isLoading, isAuthenticated } = useAuth0();

  // if (isAuthenticated) {
  //   const { profile } = useDataUser(isAuthenticated);
  // }

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
        <Route path="/mycourses/:courseId" element={<MediaPlayer />} />
        <Route path="/success/:coursedetails" element={<Success />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shoppingcart" element={<IndexCart />} />
      </Routes>
      <Header />
      <Banner />
      <Courses />
      {/* {isAuthenticated && <UserIsLogin />} */}
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
