import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Body/Header/Header.jsx";
import Banner from "./components/Body/Banner.jsx";
import AboutUs from "./components/Body/AboutUs.jsx";
import Contact from "./components/Body/Contact.jsx";
import Footer from "./components/Body/Footer.jsx";
import Courses from "./components/Courses/Courses.jsx";
import Details from "./components/Courses/DetailsCourse.jsx";
import LoginBtn from "./components/Log/LoginBtn.jsx";
import { useMyContext } from "./components/Context.jsx";
import CoursePurchased from "./components/Courses/PurchasedCourse.jsx";
import styled from "styled-components";

function Home() {
  const { isLoading, isAuthenticated } = useAuth0(),
    { IS_MOBILE } = useMyContext();

  if (isLoading) {
    return (
      <LoadContainer>
        <Load />
      </LoadContainer>
    );
  }

  return (
    <HomeContainer>
      <Routes>
        <Route path="/details/:coursedetails" element={<Details />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/coursepurchased" element={<CoursePurchased />} />
        //! Acá Juan Carlos ^^^^
      </Routes>
      <Header />
      {IS_MOBILE && !isAuthenticated && <LoginBtn />}
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
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
  `,
  Load = styled.div`
    width: 30vw;
    max-width: 250px;
    aspect-ratio: 4;
    --_g: no-repeat
      radial-gradient(circle closest-side, #ff6700 90%, transparent);
    background: var(--_g) 0% 50%, var(--_g) 50% 50%, var(--_g) 100% 50%;
    background-size: calc(100% / 3) 100%;
    animation: l7 1s infinite linear;

    @keyframes l7 {
      33% {
        background-size: calc(100% / 3) 0%, calc(100% / 3) 100%,
          calc(100% / 3) 100%;
      }

      50% {
        background-size: calc(100% / 3) 100%, calc(100% / 3) 0%,
          calc(100% / 3) 100%;
      }

      66% {
        background-size: calc(100% / 3) 100%, calc(100% / 3) 100%,
          calc(100% / 3) 0%;
      }
    }
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
