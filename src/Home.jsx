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
import CoursePurchased from "./components/Courses/CoursePurchased.jsx";
import References from "./components/Body/References.jsx";
import LoadComponent from "./components/Body/LoadComponent.jsx";
import styled from "styled-components";

function Home() {
  const { isLoading, isAuthenticated, user } = useAuth0();

  useEffect(() => {
    async function createUser() {
      try {
        const data = await fetch(`${BACK_PATH}/users`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(user),
        });
        const json = await data.json();
      } catch (err) {
        console.log({ error: err.message });
      }
    }
    if (isAuthenticated) {
      createUser();
    }
  }, [isAuthenticated]);

  if (isLoading) {
    return <LoadComponent />;
  } else {
    return (
      <PageContainer>
        <Routes>
          <Route path="/coursepurchased" element={<CoursePurchased />} />
          <Route path="/details/:coursedetails" element={<DetailsCourse />} />
        </Routes>
        <Header />
        {!isAuthenticated && <MobileLoginBtn />}
        <Banner />
        <Courses />
        <AboutUs />
        <References />
        <Contact />
        <Footer />
      </PageContainer>
    );
  }
}

export default Home;

const PageContainer = styled.main`
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
