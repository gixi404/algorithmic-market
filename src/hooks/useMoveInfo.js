import { useState, useEffect } from "react";

export function useMoveInfo() {
  const [succesData, setSuccessData] = useState([]);

  useEffect(() => {
    const list = localStorage.getItem("list");
    if (list) {
      setSuccessData(list);
    }
  }, []);

  return { succesData };
}
