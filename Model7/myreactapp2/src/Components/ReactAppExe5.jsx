// Import necessary hooks from React
import { useState, useEffect } from "react";

// Import MUI components for layout, navigation, and UI elements
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  TextField,
  Grid,
  CircularProgress,
  Alert,
  Container,
  CssBaseline,
} from "@mui/material";

// Import MUI theming utilities
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Import MUI icons for visual enhancements
import HomeIcon from "@mui/icons-material/Home";
import LockIcon from "@mui/icons-material/Lock";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import ListAltIcon from "@mui/icons-material/ListAlt";

// ─────────────────────────────────────────────
// CUSTOM THEME
// Creates a dark crypto-themed MUI custom theme
// ─────────────────────────────────────────────
const cryptoTheme = createTheme({
  // Set the color mode to dark
  palette: {
    mode: "dark",
    // Primary color used for buttons, highlights
    primary: {
      main: "#e94560",
    },
    // Secondary color used for accents
    secondary: {
      main: "#4caf50",
    },
    // Custom background colors for paper and default surfaces
    background: {
      default: "#16213e",
      paper: "#0f3460",
    },
    // Text color for standard content
    text: {
      primary: "#ffffff",
      secondary: "#aaaaaa",
    },
  },
  // Custom typography settings
  typography: {
    fontFamily: "'Segoe UI', Roboto, sans-serif",
    h4: {
      fontWeight: 700,
      color: "#e94560",
    },
    h6: {
      fontWeight: 600,
    },
  },
  // Custom shape settings for rounded corners
  shape: {
    borderRadius: 8,
  },
});

// ─────────────────────────────────────────────
// NAVBAR COMPONENT (MUI AppBar)
// Renders navigation using MUI AppBar and Toolbar
// ─────────────────────────────────────────────
const Navbar = ({ setPage }) => {
  return (
    // AppBar sticks to the top and uses primary color from the theme
    <AppBar position="static" color="primary" sx={{ backgroundColor: "#1a1a2e" }}>
      <Toolbar sx={{ gap: 1 }}>
        {/* App logo/title on the left side */}
        <CurrencyBitcoinIcon sx={{ mr: 1, color: "#e94560" }} />
        <Typography
          variant="h6"
          sx={{ flexGrow: 1, color: "white", fontWeight: "bold" }}
        >
          CryptoApp
        </Typography>

        {/* Navigation buttons — each switch the current page */}
        <Button
          color="inherit"
          startIcon={<HomeIcon />}
          onClick={() => setPage("home")}
          sx={{ borderColor: "#e94560", border: "1px solid", color: "#e94560", mx: 0.5 }}
        >
          Home
        </Button>

        <Button
          color="inherit"
          startIcon={<LockIcon />}
          onClick={() => setPage("login")}
          sx={{ borderColor: "#e94560", border: "1px solid", color: "#e94560", mx: 0.5 }}
        >
          Login
        </Button>

        <Button
          color="inherit"
          startIcon={<CurrencyBitcoinIcon />}
          onClick={() => setPage("bitcoin")}
          sx={{ borderColor: "#e94560", border: "1px solid", color: "#e94560", mx: 0.5 }}
        >
          Bitcoin Rates
        </Button>

        {/* Extension: PostList navigation button */}
        <Button
          color="inherit"
          startIcon={<ListAltIcon />}
          onClick={() => setPage("posts")}
          sx={{ borderColor: "#e94560", border: "1px solid", color: "#e94560", mx: 0.5 }}
        >
          Posts
        </Button>
      </Toolbar>
    </AppBar>
  );
};

// ─────────────────────────────────────────────
// HOME PAGE COMPONENT
// Displays a welcome message and feature cards using MUI Grid & Card
// ─────────────────────────────────────────────
const Home = () => {
  // Feature card data — each object represents one feature card
  const features = [
    {
      icon: "📈",
      title: "Live Rates",
      desc: "Track real-time Bitcoin prices.",
    },
    {
      icon: "🔒",
      title: "Secure Login",
      desc: "Safe and encrypted access.",
    },
    {
      icon: "🌍",
      title: "Global Data",
      desc: "Rates from around the world.",
    },
  ];

  return (
    // Full-height dark background container
    <Box sx={{ minHeight: "90vh", backgroundColor: "background.default", py: 5 }}>
      <Container>
        {/* Page heading */}
        <Typography variant="h4" gutterBottom>
          Welcome to CryptoApp 🚀
        </Typography>

        {/* Subtitle paragraph */}
        <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
          Your one-stop platform for tracking Bitcoin rates and managing your account.
        </Typography>

        {/* MUI Grid layout for feature cards */}
        <Grid container spacing={3}>
          {/* Map over features array to render individual cards */}
          {features.map((feature, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              {/* MUI Card component for each feature */}
              <Card
                sx={{
                  backgroundColor: "background.paper",
                  textAlign: "center",
                  p: 2,
                  height: "100%",
                  border: "1px solid #e94560",
                }}
              >
                <CardContent>
                  {/* Feature emoji icon */}
                  <Typography variant="h4">{feature.icon}</Typography>
                  {/* Feature title */}
                  <Typography variant="h6" sx={{ mt: 1, color: "primary.main" }}>
                    {feature.title}
                  </Typography>
                  {/* Feature description */}
                  <Typography variant="body2" sx={{ color: "text.secondary", mt: 1 }}>
                    {feature.desc}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

// ─────────────────────────────────────────────
// LOGIN PAGE COMPONENT (MUI Form)
// Renders a styled login form using MUI TextField and Button
// ─────────────────────────────────────────────
const Login = () => {
  // State to manage controlled form field values
  const [formData, setFormData] = useState({ email: "", password: "" });

  // State to track whether form was successfully submitted
  const [submitted, setSubmitted] = useState(false);

  // Updates formData state dynamically based on changed input field
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handles form submission — prevents default reload behaviour
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    // Full-height centered container for the login form
    <Box
      sx={{
        minHeight: "90vh",
        backgroundColor: "background.default",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        pt: 8,
      }}
    >
      {/* Page heading */}
      <Typography variant="h4" gutterBottom>
        Login 🔐
      </Typography>

      {/* Show success message after successful login, otherwise show form */}
      {submitted ? (
        // MUI Alert component for success feedback
        <Alert severity="success" sx={{ mt: 3, fontSize: "16px" }}>
          ✅ Logged in successfully as <strong>{formData.email}</strong>!
        </Alert>
      ) : (
        // MUI Box used as form container with dark card styling
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            backgroundColor: "background.paper",
            padding: 4,
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
            gap: 2,
            width: "320px",
            mt: 2,
          }}
        >
          {/* Email input using MUI TextField */}
          <TextField
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            // Style the input label and border to match theme
            sx={{
              input: { color: "white" },
              label: { color: "#aaa" },
            }}
          />

          {/* Password input using MUI TextField */}
          <TextField
            label="Password"
            type="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            variant="outlined"
            sx={{
              input: { color: "white" },
              label: { color: "#aaa" },
            }}
          />

          {/* Submit button using MUI Button with primary theme colour */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ fontWeight: "bold", mt: 1 }}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );
};

// ─────────────────────────────────────────────
// BITCOIN RATES PAGE COMPONENT
// Fetches and displays live Bitcoin rates in MUI Cards
// ─────────────────────────────────────────────
const BitcoinRates = () => {
  // State to store fetched Bitcoin currency rates
  const [rates, setRates] = useState(null);

  // State to manage loading spinner visibility
  const [loading, setLoading] = useState(true);

  // State to display any fetch error messages
  const [error, setError] = useState(null);

  // useEffect fetches Bitcoin data once when component first mounts
  useEffect(() => {
    // Call CoinDesk public API for Bitcoin price index
    fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then((res) => {
        // Throw an error if the HTTP response is not successful
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        // Store the currency rates from the API response
        setRates(data.bpi);
        setLoading(false);
      })
      .catch((err) => {
        // Store the error message and stop loading
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount only

  return (
    <Box sx={{ minHeight: "90vh", backgroundColor: "background.default", py: 5 }}>
      <Container>
        {/* Page heading */}
        <Typography variant="h4" gutterBottom>
          ₿ Bitcoin Rates
        </Typography>

        {/* Show MUI circular spinner while data is loading */}
        {loading && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
            <CircularProgress color="primary" />
            <Typography>Loading rates... ⏳</Typography>
          </Box>
        )}

        {/* Show MUI error alert if the fetch failed */}
        {error && (
          <Alert severity="error" sx={{ mt: 3 }}>
            Error: {error}
          </Alert>
        )}

        {/* Render rate cards inside a MUI Grid once data is available */}
        {rates && (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Iterate over each currency object in the rates data */}
            {Object.values(rates).map((currency) => (
              <Grid item xs={12} sm={6} md={4} key={currency.code}>
                {/* MUI Card for each currency */}
                <Card
                  sx={{
                    backgroundColor: "background.paper",
                    border: "1px solid #e94560",
                    textAlign: "center",
                    p: 1,
                  }}
                >
                  <CardContent>
                    {/* Currency code e.g. USD, GBP, EUR */}
                    <Typography variant="h5" color="primary">
                      {currency.code}
                    </Typography>

                    {/* Full currency description */}
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                      {currency.description}
                    </Typography>

                    {/* Exchange rate with currency symbol */}
                    <Typography
                      variant="h6"
                      sx={{ mt: 2, color: "secondary.main", fontWeight: "bold" }}
                    >
                      {currency.symbol}
                      {currency.rate}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

// ─────────────────────────────────────────────
// POST LIST COMPONENT (Extension)
// Fetches posts from JSONPlaceholder API and displays in MUI Cards/Grid
// ─────────────────────────────────────────────
const PostList = () => {
  // State to store the fetched array of posts
  const [posts, setPosts] = useState([]);

  // State to manage loading spinner visibility
  const [loading, setLoading] = useState(true);

  // State to store any fetch error messages
  const [error, setError] = useState(null);

  // useEffect fetches the first 9 posts when the component first mounts
  useEffect(() => {
    // JSONPlaceholder API for fake post data — limit to 9 posts
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=9")
      .then((res) => {
        // Throw error if HTTP response is not OK
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        // Store fetched posts in state
        setPosts(data);
        setLoading(false);
      })
      .catch((err) => {
        // Store error message and stop loading
        setError(err.message);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount only

  return (
    <Box sx={{ minHeight: "90vh", backgroundColor: "background.default", py: 5 }}>
      <Container>
        {/* Page heading */}
        <Typography variant="h4" gutterBottom>
          📋 Post List
        </Typography>

        {/* Show loading spinner while data is being fetched */}
        {loading && (
          <Box sx={{ display: "flex", alignItems: "center", gap: 2, mt: 3 }}>
            <CircularProgress color="primary" />
            <Typography>Loading posts...</Typography>
          </Box>
        )}

        {/* Show error alert if fetch failed */}
        {error && (
          <Alert severity="error" sx={{ mt: 3 }}>
            Error: {error}
          </Alert>
        )}

        {/* Render posts inside a MUI Grid once data is available */}
        {posts.length > 0 && (
          <Grid container spacing={3} sx={{ mt: 2 }}>
            {/* Map over each post object and render a Card */}
            {posts.map((post) => (
              <Grid item xs={12} sm={6} md={4} key={post.id}>
                {/* MUI Card for each post */}
                <Card
                  sx={{
                    backgroundColor: "background.paper",
                    border: "1px solid #e94560",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    {/* Post ID badge */}
                    <Typography
                      variant="caption"
                      sx={{
                        backgroundColor: "#e94560",
                        color: "white",
                        px: 1,
                        py: 0.5,
                        borderRadius: 1,
                        fontSize: "11px",
                      }}
                    >
                      Post #{post.id}
                    </Typography>

                    {/* Post title — capitalised */}
                    <Typography
                      variant="h6"
                      sx={{ mt: 1.5, textTransform: "capitalize", color: "white" }}
                    >
                      {post.title}
                    </Typography>

                    {/* Post body content */}
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ mt: 1 }}
                    >
                      {post.body}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

// ─────────────────────────────────────────────
// MAIN APP COMPONENT
// Controls page routing and wraps everything in the custom MUI theme
// ─────────────────────────────────────────────
const ReactAppExe5 = () => {
  // State to track the currently active page — defaults to "home"
  const [page, setPage] = useState("home");

  // Returns the correct page component based on the current page state
  const renderPage = () => {
    if (page === "home") return <Home />;
    if (page === "login") return <Login />;
    if (page === "bitcoin") return <BitcoinRates />;
    if (page === "posts") return <PostList />;
  };

  return (
    // ThemeProvider wraps the entire app and applies the custom cryptoTheme
    <ThemeProvider theme={cryptoTheme}>
      {/* CssBaseline applies MUI's global CSS reset and theme background */}
      <CssBaseline />

      <div>
        {/* Navbar receives setPage to allow switching between pages */}
        <Navbar setPage={setPage} />

        {/* Render the currently selected page component */}
        {renderPage()}
      </div>
    </ThemeProvider>
  );
};

// Export the main app component as the default export
export default ReactAppExe5;