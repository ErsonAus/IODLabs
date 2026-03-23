// Import necessary hooks and libraries from React
import { useState, useEffect } from "react";

// ─────────────────────────────────────────────
// NAVBAR COMPONENT
// Renders navigation links for all 3 pages
// ─────────────────────────────────────────────
const Navbar = ({ setPage }) => {
  // Inline styles for the navbar container
  const navStyle = {
    display: "flex",
    gap: "20px",
    backgroundColor: "#1a1a2e",
    padding: "15px 30px",
    alignItems: "center",
  };

  // Inline styles for each nav button
  const btnStyle = {
    background: "none",
    border: "1px solid #e94560",
    color: "#e94560",
    padding: "8px 16px",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "bold",
  };

  return (
    <nav style={navStyle}>
      {/* App Title */}
      <span style={{ color: "white", fontWeight: "bold", marginRight: "auto" }}>
        🪙 CryptoApp
      </span>

      {/* Navigation buttons - each sets the current page via setPage prop */}
      <button style={btnStyle} onClick={() => setPage("home")}>
        Home
      </button>
      <button style={btnStyle} onClick={() => setPage("login")}>
        Login
      </button>
      <button style={btnStyle} onClick={() => setPage("bitcoin")}>
        Bitcoin Rates
      </button>
    </nav>
  );
};

// ─────────────────────────────────────────────
// HOME PAGE COMPONENT
// Displays a welcome message and feature cards
// ─────────────────────────────────────────────
const Home = () => {
  // Page container style
  const pageStyle = {
    padding: "40px",
    backgroundColor: "#16213e",
    minHeight: "90vh",
    color: "white",
  };

  // Card style for feature boxes
  const cardStyle = {
    backgroundColor: "#0f3460",
    borderRadius: "8px",
    padding: "20px",
    width: "200px",
    textAlign: "center",
  };

  // Cards container style
  const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  };

  return (
    <div style={pageStyle}>
      {/* Welcome heading */}
      <h1 style={{ color: "#e94560" }}>Welcome to CryptoApp 🚀</h1>
      <p>Your one-stop platform for tracking Bitcoin rates and managing your account.</p>

      {/* Feature cards section */}
      <div style={cardContainerStyle}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <h3>📈 Live Rates</h3>
          <p style={{ fontSize: "13px" }}>Track real-time Bitcoin prices.</p>
        </div>
        {/* Card 2 */}
        <div style={cardStyle}>
          <h3>🔒 Secure Login</h3>
          <p style={{ fontSize: "13px" }}>Safe and encrypted access.</p>
        </div>
        {/* Card 3 */}
        <div style={cardStyle}>
          <h3>🌍 Global Data</h3>
          <p style={{ fontSize: "13px" }}>Rates from around the world.</p>
        </div>
      </div>
    </div>
  );
};

// ─────────────────────────────────────────────
// LOGIN PAGE COMPONENT
// Renders a basic login form with validation
// ─────────────────────────────────────────────
const Login = () => {
  // State to manage form input values
  const [formData, setFormData] = useState({ email: "", password: "" });

  // State to show success message after form submit
  const [submitted, setSubmitted] = useState(false);

  // Handle input changes and update formData state
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission - prevent default reload, set submitted to true
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Page container style
  const pageStyle = {
    padding: "60px 40px",
    backgroundColor: "#16213e",
    minHeight: "90vh",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  // Form box style
  const formStyle = {
    backgroundColor: "#0f3460",
    padding: "30px",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
  };

  // Input field style
  const inputStyle = {
    padding: "10px",
    borderRadius: "5px",
    border: "none",
    fontSize: "14px",
  };

  // Submit button style
  const btnStyle = {
    padding: "10px",
    backgroundColor: "#e94560",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontWeight: "bold",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: "#e94560" }}>Login 🔐</h1>

      {/* Show success message if form has been submitted */}
      {submitted ? (
        <p style={{ color: "#4caf50", fontSize: "18px" }}>
          ✅ Logged in successfully as <strong>{formData.email}</strong>!
        </p>
      ) : (
        // Login form with email and password fields
        <form style={formStyle} onSubmit={handleSubmit}>
          <label>Email</label>
          <input
            style={inputStyle}
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            style={inputStyle}
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          {/* Submit button */}
          <button style={btnStyle} type="submit">
            Login
          </button>
        </form>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────
// BITCOIN RATES PAGE COMPONENT
// Fetches and displays live Bitcoin rates from API
// ─────────────────────────────────────────────
const BitcoinRates = () => {
  // State to store fetched Bitcoin rates
  const [rates, setRates] = useState(null);

  // State to manage loading status
  const [loading, setLoading] = useState(true);

  // State to manage error messages
  const [error, setError] = useState(null);

  // useEffect runs once when component mounts to fetch data
  useEffect(() => {
    // Fetch Bitcoin exchange rates from CoinDesk public API
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        // If response is not OK, throw an error
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        // Save the currency rates from the response
        setRates(data.bpi);
        setLoading(false);
      })
      .catch((err) => {
        // Save the error message and stop loading
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty dependency array = run only once on mount

  // Page container style
  const pageStyle = {
    padding: "40px",
    backgroundColor: "#16213e",
    minHeight: "90vh",
    color: "white",
  };

  // Card style for each currency
  const cardStyle = {
    backgroundColor: "#0f3460",
    borderRadius: "8px",
    padding: "20px",
    width: "200px",
    textAlign: "center",
    border: "1px solid #e94560",
  };

  // Container for rate cards
  const cardContainerStyle = {
    display: "flex",
    gap: "20px",
    marginTop: "30px",
    flexWrap: "wrap",
  };

  return (
    <div style={pageStyle}>
      <h1 style={{ color: "#e94560" }}>₿ Bitcoin Rates</h1>

      {/* Show loading message while fetching */}
      {loading && <p>Loading rates... ⏳</p>}

      {/* Show error if fetch failed */}
      {error && <p style={{ color: "red" }}>Error: {error}</p>}

      {/* Render rate cards when data is available */}
      {rates && (
        <div style={cardContainerStyle}>
          {/* Loop through each currency in the rates object */}
          {Object.values(rates).map((currency) => (
            <div key={currency.code} style={cardStyle}>
              {/* Currency code (e.g., USD, GBP, EUR) */}
              <h2>{currency.code}</h2>
              {/* Currency description */}
              <p style={{ fontSize: "12px", color: "#aaa" }}>{currency.description}</p>
              {/* Rate value with symbol */}
              <p style={{ fontSize: "20px", color: "#4caf50", fontWeight: "bold" }}>
                {currency.symbol}
                {currency.rate}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ─────────────────────────────────────────────
// MAIN APP COMPONENT
// Controls which page is currently displayed
// ─────────────────────────────────────────────
const ReactAppExe4 = () => {
  // State to track the current active page (default is "home")
  const [page, setPage] = useState("home");

  // Function to render the correct page component based on current page state
  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "login") return <Login />;
    if (page === "bitcoin") return <BitcoinRates />;
  };

  return (
    <div>
      {/* Navbar component - receives setPage to allow page switching */}
      <Navbar setPage={setPage} />

      {/* Render the currently selected page */}
      {renderPage()}
    </div>
  );
};

// Export the main app component as default
export default ReactAppExe4;