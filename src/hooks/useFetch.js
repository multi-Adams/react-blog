import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortOp = new AbortController();
    fetch(url, { signal: abortOp.signal })
      .then((res) => {
        if (!res.ok) {
          throw Error("failed to fetch resource");
        }
        return res.json();
      })
      .then((data) => {
        setData(data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err.name === "AbortError") {
          console.log("fetch aborted");
        } else {
          setIsLoading(false);
          setError(err.message);
        }
        setIsLoading(false);
        setError(err.message);
      });
    return () => abortOp.abort();
  }, [data]);
  return { data, isLoading, error };
};

export default useFetch;
