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

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @mui material components
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components

interface SidenavCollapseProps {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
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
                <ListItemIcon>
                    {typeof icon === "string" ? (
                        <Icon>{icon}</Icon>
                    ) : (
                        icon
                    )}
                </ListItemIcon>

                <ListItemText
                    primary={name}
                />
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
    color: "info",
    active: false,
    noCollapse: false,
    children: false,
    open: false,
};

export default SidenavCollapse;
