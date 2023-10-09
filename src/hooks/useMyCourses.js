import { useState, useEffect } from "react";
// import { BACK_PATH } from "../utils/consts.js";

export function useFetch(url) {
  const [dataFetch, setDataFetch] = useState(null),
    [errorFetch, setErrorFetch] = useState(null),
    options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
    };

  useEffect(() => {
    fetch(url, options)
      .then(res => setDataFetch(res.json()))
      .catch(err => setError(err.message));
  }, [url]);

  return { dataFetch, errorFetch };
}
