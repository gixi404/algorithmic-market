import { styled } from "styled-components"
import { useState, useEffect, useContext } from "react"
import { ContextProps } from "../Context.jsx";

function PayLayout(prop){
    const { idCourse } = prop
    const { allCourses, myCourses, setMyCourses } = useContext(ContextProps);
    const [ buyUrl, setBuyUrl ] = useState("")
    const handleBuy = async(id)=>{
       const res = await fetch("http://localhost:3001/create-checkout-session",{
            method:"POST"
        })
        const data = await res.json()
        setBuyUrl(data)
        console.log('se agrego hijo de mil putas')
        const addCourse = allCourses.find(course => course.id === id);
        setMyCourses([...myCourses, addCourse])
    }
    useEffect(() => {
        if (buyUrl) {
            window.location.href= buyUrl
        }
      }, [buyUrl]);
    return(
        <Button onClick={()=>handleBuy(idCourse)}>
            Buy
        </Button>
    )
}
export default PayLayout
const Button = styled.button`

`;