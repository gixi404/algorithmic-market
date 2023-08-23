import { useState, useEffect } from "react";

export function useBuyPetition({ courseSelected }) {
    const [buyUrl, setBuyUrl] = useState("");
    const dataToFetch = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer yourAccessToken",
        },
        body: JSON.stringify(courseSelected),
    };
    async function handleBuy() {
        const res = await fetch(
            "http://localhost:3001/create-checkout-session",
            dataToFetch);
        const data = await res.json();
        setBuyUrl(data)
    }
    useEffect(() => { handleBuy() }, [courseSelected])

    return { buyUrl }
};