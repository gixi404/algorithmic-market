import { styled } from "styled-components"
import { useState, useEffect } from "react"
function PayLayout(){
    const [ buyUrl, setBuyUrl ] = useState("")
    const handleBuy = async()=>{
       const res = await fetch("http://localhost:3001/create-checkout-session",{
            method:"POST"
        })
        const data = await res.json()
        setBuyUrl(data)
    }
    useEffect(() => {
        if (buyUrl) {
            window.location.href= buyUrl
        }
      }, [buyUrl]);
    return(
        <Button onClick={handleBuy}>
            Buy
        </Button>
    )
}
export default PayLayout;
const Button = styled.button``;
