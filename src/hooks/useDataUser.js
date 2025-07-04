import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_PATH } from "../utils/consts.js";

function useDataUser(isAuthenticated) {
  const { user, getAccessTokenSilently } = useAuth0(),
    [profile, setProfile] = useState("");

  useEffect(() => isAuthenticated && getToken(), []);

  async function sendData(data) {
    const info = {
        token: { data },
        user: user,
      },
      requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(info),
      };

    try {
      const res = await fetch(`${BACK_PATH}/guardartoken`, requestOptions);

      if (!res.ok) {
        throw new Error("La solicitud falló");
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
      } catch (err) {
        throw new Error("No se logró obtener el token: " + err.message);
      }
    }
  }

  return { profile };
}
export default useDataUser;
