import { useState, useEffect } from "react";

// react-router components
import { useLocation, Link } from "react-router-dom";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @material-ui core components
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import Icon from "@mui/material/Icon";
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import NotificationsIcon from '@mui/icons-material/Notifications';


// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import {Search, StyledInputBase, SearchIconWrapper} from "components/Search"
// Custom styles for DashboardNavbar
import {
  navbar,
  navbarContainer,
  navbarRow,
  navbarIconButton,
  navbarMobileMenu,
} from "components/Navbars/styles";


import {
  usePageContext,
  setOpenConfigurator,
} from "context";

interface dashboardNavbarProps {
  absolute: string,
  light: boolean,
}


function DashboardNavbar({ absolute, light }: dashboardNavbarProps) {
  const [navbarType, setNavbarType] = useState<string>();
  const { state, dispatch } = usePageContext();
  const { openConfigurator, fixedNavbar } = state;
  const [openMenu, setOpenMenu] = useState<any>();
  const route = useLocation().pathname.split("/").slice(1);

  useEffect(() => {
    // Setting the navbar type
    if (fixedNavbar) {
      setNavbarType("sticky");
    } else {
      setNavbarType("static");
    }
  }, [dispatch, fixedNavbar]);

  const handleConfiguratorOpen = () => setOpenConfigurator(dispatch, !openConfigurator);
  const handleOpenMenu = (event: any) => setOpenMenu(event.currentTarget);
  const handleCloseMenu = () => setOpenMenu(false);

  // 알림
  const renderMenu = () => (
    <Menu
      anchorEl={openMenu}
      anchorReference={openMenu}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      open={Boolean(openMenu)}
      onClose={handleCloseMenu}
      sx={{ mt: 2 }}
    >


    </Menu>
  );

  return (
    <AppBar position="static">
      <Toolbar sx={(theme) => navbarContainer(theme)}>
        <SoftBox color="inherit" mb={{ xs: 1, md: 0 }} sx={(theme: any) => navbarRow(theme)}>
          {route[route.length - 1]}
        </SoftBox>

        <SoftBox sx={(theme:any) => navbarRow(theme)}>
            <SoftBox pr={1}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search…"
                  inputProps={{ 'aria-label': 'search' }}
                />
              </Search>
            </SoftBox>
            <SoftBox color={light ? "white" : "inherit"}>
              <Link to="/authentication/sign-in">
                <IconButton sx={navbarIconButton} size="small">
                  <AccountCircleIcon/>
                  Sign in
                </IconButton>
              </Link>
              <IconButton sx={navbarIconButton} size="small">
                <SettingsIcon/>
              </IconButton>
              <IconButton
                size="small"
                color="inherit"
                sx={navbarIconButton}
                aria-controls="notification-menu"
                aria-haspopup="true"
                onClick={handleOpenMenu}
              >
                <Icon className={light ? "text-white" : "text-dark"}>
                  <NotificationsIcon/>
                </Icon>
              </IconButton>
              {renderMenu()}
            </SoftBox>
          </SoftBox>
      </Toolbar>
    </AppBar>
  );
}

export default DashboardNavbar;
