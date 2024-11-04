import React, { useState, useEffect, useMemo  } from 'react';

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
// Images
import brand from "assets/images/langcall-logo.png";

//files
import './App.css';
import routes from "./routes"



interface RouteType {
  type: string,
    name: string,
    key: string,
    route: string,
    icon?: React.FC,
    component?: any,
    noCollapse: boolean,
    collapse?: string
}



function App() {
  const [onMouseEnter, setOnMouseEnter] = useState(false);
  const sidenavColor = "info"
  const { pathname } = useLocation();


  // Setting page scroll to 0 when changing the route
  useEffect(() => {
    document.documentElement.scrollTop = 0;
  
  }, [pathname]);

  const getRoutes = (allRoutes:any) => allRoutes.map((route:RouteType) => {
        if (route.collapse) {
          return getRoutes(route.collapse);
        }

        if (route.route) {
          return <Route path={route.route} element={route.component} key={route.key} />;
        }

        return null;
      });


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
        {getRoutes(routes)}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
