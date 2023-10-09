import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { BACK_PATH } from "../utils/consts.js";

export function useBuyPetition(props) {
  const { courses } = props,
    [buyUrl, setBuyUrl] = useState(""),
    { user } = useAuth0();

  useEffect(() => {
    handleBuy();
  }, [courses]);

  const mappedList = courses.map(course => ({
      price_data: {
        product_data: {
          name: course.name,
          description: course.description,
        },
        unit_amount: course.cash * 100,
        currency: "usd",
      },
      quantity: 1,
    })),
    mappedId = courses.map(course => ({ id: course.id })),
    User = user.email,
    infoBuy = { list: mappedList, id: mappedId, user: User };

  async function handleBuy() {
    const dataToFetch = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(infoBuy),
    };

    try {
      const res = await fetch(
        `${BACK_PATH}/create-checkout-session`,
        dataToFetch
      );
      const data = await res.json();

      const { sessionUrl } = data;

      setBuyUrl(sessionUrl);

      localStorage.setItem("id", JSON.stringify(mappedId));
    } catch (error) {
      console.log("La solicitud de compra falló.");
    }
  }

  return { buyUrl };
}
