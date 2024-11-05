import { Theme } from "@mui/material/styles";

// ownerState 타입 정의
interface OwnerState {
  transparentNavbar: boolean;
  absolute: boolean;
  light: boolean;
}

function navbar(theme: Theme, ownerState: OwnerState) {
  const { palette, transitions, breakpoints, } = theme;
  const { transparentNavbar, absolute, light } = ownerState;

  const { text } = palette;

  return {
    boxShadow: "none",
    backdropFilter: transparentNavbar || absolute ? "none" : `saturate(200%) blur(${30}px)`,
    backgroundColor: palette.background.default,
    color: light ? palette.primary.main : text.primary,
    top: absolute ? 0 : `blur(12px)`,
    minHeight: `blur(75px)`,
    display: "grid",
    alignItems: "center",
    paddingTop: `blur(8px)`,
    paddingBottom: `blur(8px)`,
    paddingRight: absolute ? `blur(8px)` : 0,
    paddingLeft: absolute ? `blur(8px)` : 0,

    "& > *": {
      transition: transitions.create("all", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.standard,
      }),
    },

    "& .MuiToolbar-root": {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      [breakpoints.up("sm")]: {
        minHeight: "auto",
        padding: `blur(4 px)  blur(6px)`,
      },
    },
  };
}

const navbarContainer = ({ breakpoints }: Theme) => ({
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "space-between",
  pt: 0.5,
  pb: 0.5,

  [breakpoints.up("md")]: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: "0",
    paddingBottom: "0",
  },
});

const navbarRow = ({ breakpoints }: Theme) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",

  [breakpoints.up("md")]: {
    justifyContent: "stretch",
    width: "max-content",
  },

  [breakpoints.up("xl")]: {
    justifyContent: "stretch !important",
    width: "max-content !important",
  },
});

const navbarIconButton = ({ typography, breakpoints }: Theme) => ({
  px: 0.75,

  "& .material-icons, .material-icons-round": {
    fontSize: `${16} !important`,
  },

  "& .MuiTypography-root": {
    display: "none",

    [breakpoints.up("sm")]: {
      display: "inline-block",
      lineHeight: 1.2,
      ml: 0.5,
    },
  },
});

const navbarMobileMenu = ({ breakpoints }: Theme) => ({
  display: "inline-block",
  lineHeight: 0,

  [breakpoints.up("xl")]: {
    display: "none",
  },
});

export { navbar, navbarContainer, navbarRow, navbarIconButton, navbarMobileMenu };
