import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_PATH } from "./utils/consts.js";
import Header from "./components/Body/Header/Header.jsx";
import Banner from "./components/Body/Banner.jsx";
import AboutUs from "./components/Body/AboutUs.jsx";
import Contact from "./components/Body/Contact.jsx";
import Footer from "./components/Body/Footer.jsx";
import Courses from "./components/Courses/Courses.jsx";
import DetailsCourse from "./components/Courses/DetailsCourse.jsx";
import MobileLoginBtn from "./components/Log/MobileLoginBtn.jsx";
import CoursePurchased from "./components/Courses/CoursePurchased.jsx"
import styled from "styled-components";

function Home() {
  const { isLoading, isAuthenticated, user} = useAuth0()
  useEffect(() => {
    const createUser = async () => {
      try {
        const data = await fetch(`${BACK_PATH}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
        const json = await data.json();
      } catch (e) {
        console.log({"error":e.message});
      }
    };
    if (isAuthenticated) {
      createUser()
    }
  }, [isAuthenticated]);
  if (isLoading) {
    return (
      <LoadContainer>
        <Load />
      </LoadContainer>
    );
  }

  return (
    <PageContainer>
      <Routes>
        <Route path="/coursepuchased" element={<CoursePurchased />} />
        <Route path="/details/:coursedetails" element={<DetailsCourse />} />
      </Routes>
      <Header />
      {!isAuthenticated && <MobileLoginBtn />}
      <Banner />
      <Courses />
      <AboutUs />
      <Contact />
      <Footer />
    </PageContainer>
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
  Load = styled.span`
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
  PageContainer = styled.main`
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

/* for the future
  useEffect(() => {
    const getToken = async () => {
      try {
        const newToken = await getAccessTokenSilently(),
          data = await fetch(`${BACK_PATH}/users`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user),
          });
        const json = await data.json();
        setUserInfo(json);
      } catch (e) {
        console.log("error", e.message);
      }
    };
    if (isAuthenticated) {
      getToken();
    }
  }, [isAuthenticated]);
  */
