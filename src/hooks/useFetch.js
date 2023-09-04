import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    try {
      async function fetchData() {
        const res = await fetch(url);
        const data = await res.json();
        setData(data);
        setIsPending(false);
        setError(null);
      }
      fetchData();
    } catch (err) {
      setError(err.message);
      setIsPending(false);
    }
  }, [url]);

  return { data, isPending, error };
}

export default useFetch;