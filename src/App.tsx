import React, { useState } from 'react';

// react-router components
import { Routes, Route, Navigate, useLocation } from "react-router-dom";

// @mui material components
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React themes
import theme from "assets/theme";

// Side
import Sidenav from "components/Sidenav";

//files
import './App.css';
import routes from "./routes"

function App() {
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  const sidenavColor = "info"
  const brand = "LangCall"



  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (!onMouseEnter) {
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setOnMouseEnter(false);
    }
  };


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Sidenav
        color={sidenavColor}
        brand={brand}
        brandName="Lang Call"
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
      />
      <Routes>
        {/* {getRoutes(routes)} */}
        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
