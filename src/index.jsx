import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Context from "./components/Context.jsx";
import Home from "./Home.jsx";
import MyCourses from "./components/Log/MyCourses.jsx";
import Privacy from "./components/Body/Privacy.jsx";
import "./index.css";

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
      <BrowserRouter>
        <Context>
          <Routes>
            <Route path='*'  element={<Home />}/>
            <Route path="/mycourses" element={<MyCourses />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </Context>
      </BrowserRouter>
    </Auth0Provider>
  </StrictMode>
);
