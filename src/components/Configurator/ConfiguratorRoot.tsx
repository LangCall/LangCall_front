// @mui material components
import Drawer from "@mui/material/Drawer";
import { styled } from "@mui/material/styles";

interface ownerStateProps {
  ownerState : boolean;
}



export default styled(Drawer)<ownerStateProps>(({ theme, ownerState }) => {
  const {  transitions } = theme;
  const openConfigurator = ownerState;

  const configuratorWidth = 360;
  const lg = `0 1rem 3rem rgba($black, .175);`;

  // drawer styles when openConfigurator={true}
  const drawerOpenStyles = () => ({
    width: configuratorWidth,
    left: "initial",
    right: 0,
    transition: transitions.create("right", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  // drawer styles when openConfigurator={false}
  const drawerCloseStyles = () => ({
    left: "initial",
    right: `-350px`,
    transition: transitions.create("all", {
      easing: transitions.easing.sharp,
      duration: transitions.duration.short,
    }),
  });

  return {
    "& .MuiDrawer-paper": {
      height: "100vh",
      margin: 0,
      padding: `0 15px`,
      borderRadius: 0,
      boxShadow: lg,
      overflowY: "auto",
      ...(openConfigurator ? drawerOpenStyles() : drawerCloseStyles()),
    },
  };
});
