import React, { useEffect, useReducer, } from 'react';

// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";



// props의 타입을 지정하는 인터페이스
// type으로도 가능 type SidenavProps = { ~:~; ... }
interface SidenavProps {
    color : "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark";
    brand : string;
    brandName : string;
    routes: any;
    onMouseEnter: () => void; 
    onMouseLeave: () => void;
}

interface RoutesProps {
    type : string;
    name : string;
    icon? : any;
    title : string;
    key : string;
    route : string;


}

const Sidenav = ({color="info", brand="", brandName, routes, ...rest }:SidenavProps) => {
    // 1. props에 ="value"가 있으면 default로 지정하는 것
    



    // Render all the routes from the routes.js (All the visible items on the Sidenav)
    const renderRoutes = routes.map(({ type, name, icon, title, key, route } : RoutesProps) => {
        return (
            <>
            </>
        )
    });


    return (
        <>
            {renderRoutes}
        </>
      );
}

// 2. props에 있는 것에 default로 지정하는 것
Sidenav.defaultProps = {
    color :"info",
    brand : ""
}

export default Sidenav;