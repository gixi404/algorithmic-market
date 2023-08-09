import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./components/Context.jsx";
import Home from "./Home.jsx";
import Profile from "./components/Profile.jsx";
import MyCourses from "./components/MyCourses.jsx";
import Privacy from "./components/Privacy.jsx";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer.jsx";
import Success from "./components/PayLayout/Success.jsx";
import "./index.css";
import CourseDetails from "./components/CourseDetails.jsx";

const DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN,
  CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <Auth0Provider
      domain={DOMAIN}
      clientId={CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <Context>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/details/:coursedetails" element={<CourseDetails />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/mycourses/:courseId" element={<MediaPlayer />} />
            <Route path="/success" element={<Success />} />
          </Routes>
        </BrowserRouter>
      </Context>
    </Auth0Provider>
  </StrictMode>,
);
