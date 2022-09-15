import { useCallback, useState } from "react";

// CUSTOM HTTP HOOK FOR API CALLS.
const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (requestConfig, applyData) => {
    setIsLoading(true);
    setError(null);
    let params = "";
    if (requestConfig.params) {
      params = "?";
      for (let [key, value] of Object.entries(requestConfig.params)) {
        params = `${params}${key}=${value}&`;
      }
    }

    const URL = requestConfig.url + params;

    try {
      const response = await fetch(URL, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : null,
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) {
        throw new Error("Request Failed!");
      }
      const data = await response.json();

      applyData(data);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, []);

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
