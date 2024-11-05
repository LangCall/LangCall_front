import { ReactNode, useEffect } from "react";

// react-router-dom components
import { useLocation } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Soft UI Dashboard React context
import { usePageContext, setPage } from "context";

import { Theme } from "@mui/material/styles";

interface dashboardLayoutProps {
  children: ReactNode
}


function DashboardLayout({ children }:dashboardLayoutProps) {
  const { state, dispatch } = usePageContext();
  const { pathname } = useLocation();

  useEffect(() => {
    setPage(dispatch, "dashboard");
  }, [pathname]);

  return (
    <SoftBox
      sx={({ breakpoints, transitions,}:Theme) => ({
        p: 3,
        position: "relative",
        marginLeft: `300ms`,
        transition: transitions.create(["margin-left", "margin-right"], {
          easing: transitions.easing.easeInOut,
          duration: transitions.duration.standard,
        }),
      })}
    >
      {children}
    </SoftBox>
  );
}

export default DashboardLayout;
