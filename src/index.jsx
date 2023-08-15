import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./components/Context.jsx";
import Home from "./Home.jsx";
import MyCourses from "./components/Log/MyCourses.jsx";
import Privacy from "./components/Privacy.jsx";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer.jsx";
import Success from "./components/Courses/Success.jsx";
import CourseDetails from "./components/Courses/CourseDetails.jsx";
import AuthenticatedUser from "./components/AuthenticatedUser.jsx";
import "./index.css";
import Contact from "./components/Body/Contact.jsx";

const DOMAIN = "dev-pxe14roena18vlea.us.auth0.com",
  CLIENT_ID = "0al9hxaRhflv7QXzRwQTW6ayfjOWBRWV";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{ redirect_uri: window.location.origin }}
    >
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/details/:coursedetails" element={<CourseDetails />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/mycourses/:courseId" element={<MediaPlayer />} />
            <Route path="/success/:coursedetails" element={<Success />} />
            <Route path="/authenticateduser" element={<AuthenticatedUser />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </Auth0Provider>
  </StrictMode>
);
