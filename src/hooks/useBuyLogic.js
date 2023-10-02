import { useState,useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const {user} = useAuth0()
export function useBuyPetition ({ courses }) {
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
  
  const mappedId = courses.map(course => ({id : course.id}))
  
  const User = user.email

  const infoBuy = {list: mappedList, id: mappedId, user:User}
  
  async function handleBuy() {
        const dataToFetch = {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(infoBuy)
        }
        
        try {
          const res = await fetch(
            "http://localhost:3001/create-checkout-session",
            dataToFetch
            )
            const data = await res.json()

      const { sessionUrl } = data;

      setBuyUrl(sessionUrl);

            localStorage.setItem('id', JSON.stringify(mappedId))

          } catch (error) {
            console.log('La solicitud de compra falló.')
          }
  }
  useEffect(() => {handleBuy()},[courses])
  return { buyUrl };
}
