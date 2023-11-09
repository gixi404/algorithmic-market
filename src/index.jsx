import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
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
    // const { protectedRoute } = useMyContext();

    return (
      <StrictMode>
        <Auth0Provider
          domain={DOMAIN}
          clientId={CLIENT_ID}
          authorizationParams={{ redirect_uri: window.location.origin }}
        >
          <HashRouter basename="/">
            <Routes>
              <Route path="/mycourses/:courseid" element={<MediaPlayer />} />
              {/* element={protectedRoute ? <MediaPlayer /> : <Navigate to="/" />} */}
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/shoppingcart" element={<IndexCart />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </HashRouter>
        </Auth0Provider>
      </StrictMode>
    );
  };

root.render(<MyContext />);
