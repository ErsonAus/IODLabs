import React from 'react';
import useBitcoinPrice from '../hooks/CustomHook'; // Import the custom hook that manages Bitcoin price fetching and state.

// Component uses custom hook instead of direct fetch/useEffect logic.
export default function BitcoinRatesExe2() {
  // Destructure state and actions from custom hook.
  const { currencies, currency, setCurrency, price, loading, error } = useBitcoinPrice();

  // Build dropdown options from currencies list.
  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  // Render presentational UI only.
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

// Export component for app usage.
