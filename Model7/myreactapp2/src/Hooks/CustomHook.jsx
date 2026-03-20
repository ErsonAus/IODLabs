import { useEffect, useReducer } from 'react';

// Define supported currencies in one place.
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];

// Define action types to avoid string typos.
const ACTIONS = {
  SET_CURRENCY: 'SET_CURRENCY',
  FETCH_START: 'FETCH_START',
  FETCH_SUCCESS: 'FETCH_SUCCESS',
  FETCH_ERROR: 'FETCH_ERROR',
};

// Define initial reducer state.
const initialState = {
  currency: currencies[0], // Default selected currency.
  price: null,             // Latest fetched BTC price.
  loading: false,          // Loading status while API call is running.
  error: '',               // Error message for failed requests.
};

// Reducer handles all internal state transitions.
function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET_CURRENCY:
      // Update selected currency when user changes dropdown.
      return { ...state, currency: action.payload };

    case ACTIONS.FETCH_START:
      // Start loading and clear old errors before each request.
      return { ...state, loading: true, error: '' };

    case ACTIONS.FETCH_SUCCESS:
      // Save fetched price and stop loading.
      return { ...state, loading: false, price: action.payload, error: '' };

    case ACTIONS.FETCH_ERROR:
      // Clear price and save error when request fails.
      return { ...state, loading: false, price: null, error: action.payload };

    default:
      // Return current state for unknown actions.
      return state;
  }
}

// Custom hook encapsulates external API synchronization.
export default function useBitcoinPrice() {
  // Use reducer for predictable internal state management.
  const [state, dispatch] = useReducer(reducer, initialState);

  // Fetch data whenever selected currency changes.
  useEffect(() => {
    // AbortController cancels in-flight request on cleanup.
    const controller = new AbortController();

    // Async function to fetch current BTC price.
    const fetchBitcoinPrice = async () => {
      // Notify reducer that fetch has started.
      dispatch({ type: ACTIONS.FETCH_START });

      try {
        // Build endpoint with selected currency in lowercase.
        const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${state.currency.toLowerCase()}`;

        // Perform fetch request.
        const response = await fetch(url, { signal: controller.signal });

        // Throw error for non-2xx HTTP responses.
        if (!response.ok) {
          throw new Error('Failed to fetch Bitcoin price.');
        }

        // Parse API response JSON.
        const data = await response.json();

        // Extract and store the BTC price for chosen currency.
        dispatch({
          type: ACTIONS.FETCH_SUCCESS,
          payload: data.bitcoin[state.currency.toLowerCase()],
        });
      } catch (err) {
        // Ignore abort errors because cleanup can trigger them.
        if (err.name !== 'AbortError') {
          // Save readable error message in state.
          dispatch({
            type: ACTIONS.FETCH_ERROR,
            payload: err.message || 'Unexpected error occurred.',
          });
        }
      }
    };

    // Trigger fetch for current currency.
    fetchBitcoinPrice();

    // Cleanup aborts previous fetch on currency change/unmount.
    return () => controller.abort();
  }, [state.currency]);

  // Expose state + setter for consuming components.
  return {
    currencies,
    currency: state.currency,
    setCurrency: (nextCurrency) =>
      dispatch({ type: ACTIONS.SET_CURRENCY, payload: nextCurrency }),
    price: state.price,
    loading: state.loading,
    error: state.error,
  };
}