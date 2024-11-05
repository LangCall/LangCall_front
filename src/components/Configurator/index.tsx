/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState, useEffect } from "react";

// @mui material components
import Divider from "@mui/material/Divider";
import Switch from "@mui/material/Switch";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// @mui icons
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";

// Custom styles for the Configurator
import ConfiguratorRoot from "components/Configurator/ConfiguratorRoot";

import {usePageContext, setOpenConfigurator, setSidenavColor} from "context"

function Configurator() {
  // Context에서 상태와 dispatch 가져오기
  const { state, dispatch } = usePageContext();
  const sidenavColor = state.sidenavColor 

  const [disabled, setDisabled] = useState(false);
  const sidenavColors = ["primary", "dark", "info", "success", "warning", "error"];

  // Use the useEffect hook to change the button state for the sidenav type based on window size.
  useEffect(() => {
    // A function that sets the disabled state of the buttons for the sidenav type.
    function handleDisabled() {
      return window.innerWidth > 1200 ? setDisabled(false) : setDisabled(true);
    }

    // The event listener that's calling the handleDisabled function when resizing the window.
    window.addEventListener("resize", handleDisabled);

    // Call the handleDisabled function to set the state with the initial value.
    handleDisabled();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleDisabled);
  }, []);

  const handleCloseConfigurator = () => setOpenConfigurator(dispatch, false);
  

  return (
    <ConfiguratorRoot variant="permanent" ownerState={state.openConfigurator} >
      <SoftBox
        display="flex"
        justifyContent="space-between"
        alignItems="baseline"
        pt={3}
        pb={0.8}
        px={3}
      >
        <SoftBox>
            See our dashboard options.
        </SoftBox>

        <Icon
          sx={({ typography: { fontWeightBold } }) => ({
            fontWeight: `${fontWeightBold} !important`,
            strokeWidth: "2px",
            cursor: "pointer",
            mt: 2,
          })}
          onClick={handleCloseConfigurator}
        >
          close
        </Icon>
      </SoftBox>

      <Divider />

      <SoftBox pt={1.25} pb={3} px={3}>
        <SoftBox>
          Sidenav Colors

          <SoftBox mb={0.5}>
            {sidenavColors.map((color) => (
              <IconButton
                key={color}
                sx={({ transitions }) => ({
                  width: "24px",
                  height: "24px",
                  padding: 0,
                  borderColor: sidenavColor,
                  transition: transitions.create("border-color", {
                    easing: transitions.easing.sharp,
                    duration: transitions.duration.shorter,
                  }),
                  "&:not(:last-child)": {
                    mr: 1,
                  },
                })}
                onClick={() => setSidenavColor(dispatch, color)}
              />
            ))}
          </SoftBox>
        </SoftBox>

        <SoftBox mt={3} lineHeight={1}>
          Sidenav Type
          Choose between 2 different sidenav types.
        </SoftBox>
        <SoftBox mt={3} mb={2} lineHeight={1}>
          Navbar Fixed
          <Switch />
        </SoftBox>

        <Divider />

        <SoftBox mt={3} mb={2}>
          <SoftBox mb={2}>
            
          </SoftBox>
        </SoftBox>
        <SoftBox display="flex" justifyContent="center">
          <a
            className="github-button"
            href="https://github.com/creativetimofficial/soft-ui-dashboard-react"
            data-icon="octicon-star"
            data-size="large"
            data-show-count="true"
            aria-label="Star creativetimofficial/soft-ui-dashboard-react on GitHub"
          >
            Star
          </a>
        </SoftBox>
        <SoftBox mt={3} textAlign="center">
          <SoftBox mb={0.5}>
            Thank you for sharing!
          </SoftBox>

          <SoftBox display="flex" justifyContent="center">
            <SoftBox mr={1.5}>
             
            </SoftBox>
           
          </SoftBox>
        </SoftBox>
      </SoftBox>
    </ConfiguratorRoot>
  );
}

export default Configurator;
