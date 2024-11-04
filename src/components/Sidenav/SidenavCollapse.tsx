// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";



// Custom styles for the SidenavCollapse
import {
    collapseItem,
    collapseIconBox,
    collapseIcon,
    collapseText,
  } from "components/Sidenav/styles/sidenavCollapse";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";


interface SidenavCollapseProps {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "white";
    icon?: any;
    name: string;
    children?: any;
    active: boolean;
    noCollapse: boolean;
    open: boolean;
}

function SidenavCollapse({ color, icon, name, children, active, noCollapse, open, ...rest }:SidenavCollapseProps) {
    return (
        <>
            <ListItem component="li">
                <SoftBox {...rest} sx={(theme:any) => collapseItem(theme, { active })}>
                <ListItemIcon
                    sx={(theme) => collapseIconBox(theme, { active, color })}
                >
                    {typeof icon === "string" ? (
                    <Icon sx={(theme:any) => collapseIcon(theme, { active })}>{icon}</Icon>
                    ) : (
                    icon
                    )}
                </ListItemIcon>

                <ListItemText
                    primary={name}
                    sx={(theme) => collapseText(theme, { active })}
                />
                </SoftBox>
            </ListItem>
            {children && (
                <Collapse in={open} unmountOnExit>
                    {children}
                </Collapse>
            )}
        </>
    );
}

// Setting default values for the props of SidenavCollapse
SidenavCollapse.defaultProps = {
    color: "white",
    active: false,
    noCollapse: false,
    children: false,
    open: false,
};

export default SidenavCollapse;
