import React, { useEffect, useReducer, } from 'react';

// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// component
import SidenavCollapse from "components/Sidenav/SidenavCollapse";

// props의 타입을 지정하는 인터페이스
// type으로도 가능 type SidenavProps = { ~:~; ... }
interface SidenavProps {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
    brand: string;
    brandName: string;
    routes: any;
    onMouseEnter: () => void;
    onMouseLeave: () => void;
}

interface RoutesProps {
    type: string;
    name: string;
    icon?: any;
    title: string;
    noCollapse: boolean;
    key: string;
    route: string;
    href? : any;
}

const Sidenav = ({ color = "info", brand = "", brandName, routes, ...rest }: SidenavProps) => {
    // 1. props에 ="value"가 있으면 default로 지정하는 것
    
    const location = useLocation();
    const { pathname } = location;
    const collapseName = pathname.split("/").slice(1)[0];



    // Render all the routes from the routes.js (All the visible items on the Sidenav)
    const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }: RoutesProps) => {
        let returnValue;

        if (type === "collapse") {
            returnValue = href ? (
                <Link
                    href={href}
                    key={key}
                    target="_blank"
                    rel="noreferrer"
                    sx={{ textDecoration: "none" }}
                >
                    <SidenavCollapse
                        color={color}
                        name={name}
                        icon={icon}
                        active={key === collapseName}
                        noCollapse={noCollapse}
                    />
                </Link>
            ) : (
                <NavLink to={route} key={key}>
                    <SidenavCollapse
                        color={color}
                        key={key}
                        name={name}
                        icon={icon}
                        active={key === collapseName}
                        noCollapse={noCollapse}
                    />
                </NavLink>
            );
        } else if (type === "title") {
            returnValue = (
                <NavLink to={route} key={key}>
                    <SidenavCollapse
                        color={color}
                        key={key}
                        name={name}
                        icon={icon}
                        active={key === collapseName}
                        noCollapse={noCollapse}
                    />
                </NavLink>
            );
        } else if (type === "divider") {
            returnValue = <Divider key={key} />;
        }

        return returnValue;

    });


    return (
        <>
            {renderRoutes}
        </>
    );
}

// 2. props에 있는 것에 default로 지정하는 것
Sidenav.defaultProps = {
    color: "info",
    brand: ""
}

export default Sidenav;