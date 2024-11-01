import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

interface StyledDrawerProps {
  miniSidenav: boolean;
}

export default styled(Drawer)<StyledDrawerProps>(({ theme, miniSidenav }) => {
  const { palette, transitions, breakpoints } = theme;
  
  const sidebarWidth = 250;
  const { background } = palette;
  const xxl  = "0px 10px 30px rgba(0, 0, 0, 0.1)";

  // styles for the sidenav when miniSidenav={false}
  const drawerOpenStyles = {
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      backgroundColor: background,
      boxShadow: xxl,
      marginBottom: "inherit",
      left: "0",
      width: sidebarWidth,
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.enteringScreen,
      }),
    },
  };

  // styles for the sidenav when miniSidenav={true}
  const drawerCloseStyles = {
    transition: transitions.create("transform", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.shorter,
    }),

    [breakpoints.up("xl")]: {
      backgroundColor: background,
      boxShadow: xxl,
      marginBottom: "inherit",
      left: "0",
      width: sidebarWidth, // 사이드바 너비 조정
      overflowX: "hidden",
      transform: "translateX(0)",
      transition: transitions.create(["width", "background-color"], {
        easing: transitions.easing.sharp,
        duration: transitions.duration.shorter,
      }),
    },
  };

  return {
    "& .MuiDrawer-paper": {
      boxShadow: xxl,
      border: "none",
      ...(miniSidenav ? drawerCloseStyles : drawerOpenStyles),
    },
  };
});
