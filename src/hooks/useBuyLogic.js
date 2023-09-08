import { useState, useEffect } from "react";

export function useBuyPetition(props) {
  const { courseSelected } = props,
    [buyUrl, setBuyUrl] = useState("");

  useEffect(() => handleBuy(), [courseSelected]);

  async function handleBuy() {
    const dataToFetch = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer yourAccessToken",
      },
      body: JSON.stringify(courseSelected),
    };

    try {
      const res = await fetch(
        "http://localhost:3001/create-checkout-session",
        dataToFetch
      );

      if (!res.ok) {
        throw new Error("La solicitud de compra falló.");
      }

      const data = await res.json();
      setBuyUrl(data);
    } catch (error) {
      console.error(error);
    }
  }

  return { buyUrl };
}
