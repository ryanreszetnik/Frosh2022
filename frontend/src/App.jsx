import "./App.css";
import { HashRouter as Router, Route } from "react-router-dom";
import { Routes } from "react-router";
import Home from "./pages/home";
import FAQ from "./pages/faq";
import Navigation from "./components/Navigation";
import Blog from "./pages/blog";
import Resources from "./pages/resources";
import React, { createContext, Fragment, useEffect, useMemo } from "react";
import { createTheme, Typography, ThemeProvider } from "@mui/material";
import { getTheme, ThemeContext } from "./constants/theme";
import Register from "./pages/register";
import Footer from "./components/Footer";

function App() {
  const [mode, setMode] = React.useState("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(() => createTheme(getTheme(mode)), [mode]);
  useMemo(() => {
    document.body.style.backgroundColor = theme.background;
  }, [theme]);
  return (
    <ThemeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Router>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="/register" element={<Register />} />
          </Routes>
          <Footer />
        </Router>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
