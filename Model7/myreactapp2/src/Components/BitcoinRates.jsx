import React, { useEffect, useState } from 'react'; // Import React and the hooks used by this component.

// Define the list of supported currencies.
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// Create the BitcoinRates component.
function BitcoinRates() {
  // Store the currently selected currency in state.
  const [currency, setCurrency] = useState(currencies[0]);

  // Store the fetched Bitcoin price in state.
  const [price, setPrice] = useState(null);

  // Store a loading flag while the API request is in progress.
  const [loading, setLoading] = useState(false);

  // Store any fetch error message in state.
  const [error, setError] = useState('');

  // Run this effect whenever the selected currency changes.
  useEffect(() => {
    // Create an AbortController so the fetch can be cancelled during cleanup.
    const controller = new AbortController();

    // Define an async function to fetch the Bitcoin price.
    const fetchBitcoinPrice = async () => {
      // Show the loading state before starting the request.
      setLoading(true);

      // Clear any previous error before a new request.
      setError('');

      try {
        // Build the API URL using the selected currency in lowercase.
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency.toLowerCase()}`;

        // Fetch the price data from the CoinGecko API.
        const response = await fetch(url, { signal: controller.signal });

        // Throw an error if the HTTP response is not successful.
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin price.');
        }

        // Convert the response into JSON.
        const data = await response.json();

        // Save the returned Bitcoin price for the selected currency.
        setPrice(data.bitcoin[currency.toLowerCase()]);
      } catch (err) {
        // Ignore abort errors because they are expected during cleanup.
        if (err.name !== 'AbortError') {
          // Clear the current price if the request fails.
          setPrice(null);

          // Save the error message for display.
          setError(err.message);
        }
      } finally {
        // Hide the loading state when the request finishes.
        setLoading(false);
      }
    };

    // Call the async fetch function.
    fetchBitcoinPrice();

    // Cleanup function aborts the previous request when the component unmounts or currency changes.
    return () => {
      controller.abort();
    };
  }, [currency]);

  // Create the dropdown options from the currencies array.
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  // Render the component UI.
  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      {loading && <p>Loading...</p>}

      {error && <p>Error: {error}</p>}

      {!loading && !error && price !== null && (
        <p>
          1 BTC = {price} {currency}
        </p>
      )}
    </div>
  );
}

// Export the component so it can be used in other files.
export default BitcoinRates;