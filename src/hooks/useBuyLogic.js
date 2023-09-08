import { useState, useEffect } from "react";

export function useBuyPetition({ courseSelected }) {
  const [buyUrl, setBuyUrl] = useState("");

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

  useEffect(() => {
    handleBuy();
  }, [courseSelected]);

  return { buyUrl };
}
