// Custom hook for fetching currency info
import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  // State to store fetched data
  const [data, setData] = useState({});

  // Runs whenever the currency changes
  useEffect(() => {
    // Fetch data from the API
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      // Convert response to JSON
      .then((res) => res.json())
      // Save the parsed JSON in state
      .then((res) => setData(res[currency]));
  }, [currency]);

  // Return the fetched data
  return data;
}

export default useCurrencyInfo;
