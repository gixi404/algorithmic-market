import { useState, useEffect } from "react";

export function useBuyPetition({ courses }) {
  const [buyUrl, setBuyUrl] = useState('')
  const mappedList = courses.map(course=>
    ({
      price_data: {
        product_data: {
          name:course.name,
          description: course.description
        },
        unit_amount: (course.cash *100),
        currency: "usd",
      },
      quantity: 1}))

  async function handleBuy() {
    const dataToFetch = {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer yourAccessToken",
      },
      body: JSON.stringify(mappedList)
    }

    try {
      const res = await fetch(
        "http://localhost:3001/create-checkout-session",
        dataToFetch
      )
      const data = await res.json()
      setBuyUrl(data)
    } catch (error) {
        console.log('La solicitud de compra falló.')
    }
  }

  useEffect(() => {
    handleBuy()
  }, [courses])

  return { buyUrl };
}
