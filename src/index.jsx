import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./Home.jsx";
import Context from "./components/Context.jsx";
import MyCourses from "./components/Log/MyCourses.jsx";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer.jsx";
import Privacy from "./components/Body/Privacy.jsx";
import StaffLym from "./components/Body/StaffLym.jsx";
import "./index.css";

const DOMAIN = "algorithmicmarket.us.auth0.com",
  CLIENT_ID = "CgBwpjVSJetDXDlBGJZD37NdKzmc8IWT",
  root = ReactDOM.createRoot(document.getElementById("root")),
  App = () => (
    <React.StrictMode>
      <Auth0Provider
        domain={DOMAIN}
        clientId={CLIENT_ID}
        authorizationParams={{ redirect_uri: window.location.origin }}
      >
        <BrowserRouter>
          <Context>
            <Routes>
              <Route path="*" element={<Home />} />
              <Route path="/mycourses" element={<MyCourses />} />
              <Route path="/mycourses/:coursename" element={<MediaPlayer />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/stafflym" element={<StaffLym />} />
            </Routes>
          </Context>
        </BrowserRouter>
      </Auth0Provider>
    </React.StrictMode>
  );

root.render(<App />);
