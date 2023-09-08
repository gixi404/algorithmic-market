import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

function useDataUser(isAuthenticated) {
  const { user, getAccessTokenSilently } = useAuth0();
  const [profile, setProfile] = useState("");

  async function sendData(data) {
    const info = {
      token: { data },
      user: user,
    };
    const requestOptions = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    };
    try {
      const res = await fetch(
        "http://localhost:3001/guardartoken",
        requestOptions
      );
      if (!res.ok) {
        throw new Error("la solicitud falló");
      }
      const json = await res.json();
      console.log(json);
    } catch (error) {
      console.error(error.message);
    }
  }

  async function getToken() {
    if (isAuthenticated) {
      try {
        const accessToken = await getAccessTokenSilently();
        sendData(accessToken);
        const User = { user: user, token: accessToken };
        window.localStorage.setItem("loggedUser", JSON.stringify(User));
        setProfile(User);
      } catch (e) {
        throw new Error("no se puedo obtene el token");
      }
    }
  }
  useEffect(() => {
    if (isAuthenticated) {
      getToken();
    }
  }, []);
  return { profile };
}
export default useDataUser;
