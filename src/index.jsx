import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import Home from "./Home.jsx";
import Context, { useMyContext } from "./components/Context.jsx";
import MediaPlayer from "./components/MediaPlayer/MediaPlayer.jsx";
import Privacy from "./components/Body/Privacy.jsx";
import IndexCart from "./components/Body/ShoppingCart/IndexCart.jsx";
import Profile from "./components/Body/Header/Profile.jsx";
import "./index.css";

const DOMAIN = "algorithmicmarket.us.auth0.com",
  CLIENT_ID = "CgBwpjVSJetDXDlBGJZD37NdKzmc8IWT",
  root = ReactDOM.createRoot(document.getElementById("root")),
  MyContext = () => (
    <Context>
      <App />
    </Context>
  ),
  App = () => {
    const { protectedRoute } = useMyContext();

    return (
      <React.StrictMode>
        <Auth0Provider
          domain={DOMAIN}
          clientId={CLIENT_ID}
          authorizationParams={{ redirect_uri: window.location.origin }}
        >
          <BrowserRouter basename="/">
            <Routes>
              <Route path="*" element={<Home />} />
              <Route
                path="/mycourses/:courseid"
                element={protectedRoute ? <MediaPlayer /> : <Navigate to="/" />}
              />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/shoppingcart" element={<IndexCart />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </BrowserRouter>
        </Auth0Provider>
      </React.StrictMode>
    );
  };

root.render(<MyContext />);
