import { useAuth0 } from "@auth0/auth0-react";
import { Routes, Route, Link } from "react-router-dom";
import ReactLoading from "react-loading";
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
import { useEffect } from "react";

function Home() {
  const { isLoading, isAuthenticated, getAccessTokenSilently,loginWithRedirect, loginWithPopup } = useAuth0(),
    { IS_MOBILE } = useMyContext();
  useEffect(() => {
      const getToken = async()=>{
        try{
          const newToken = await getAccessTokenSilently()
          localStorage.setItem('access_token',newToken)
        }
        catch(e){
          console.log('error', e.message)
        }
      }
      if(isAuthenticated){getToken()}
  },[isAuthenticated])

  useEffect(() => {
    const tokenAccess = localStorage.getItem('access_token')
    
    if(!isAuthenticated && tokenAccess){
      console.log(tokenAccess)
    }
  },[])
//  useEffect(() => {if(!isAuthenticated){loginWithPopup()} },[isAuthenticated])
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
        <Route path="/coursepurchased" element={<CoursePurchased />} />
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
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 45%;
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
