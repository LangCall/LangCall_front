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
import SidenavRoot from "components/Sidenav/SidenavRoot"
import SoftBox from 'components/SoftBox';

import usePageController  from 'context'

// props의 타입을 지정하는 인터페이스
// type으로도 가능 type SidenavProps = { ~:~; ... }
interface SidenavProps {
    color: "primary" | "secondary" | "info" | "success" | "warning" | "error" | "dark" | "white";
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
    href?: any;
}

const Sidenav = ({ color = "white", brand = "", brandName, routes, ...rest }: SidenavProps) => {
    // 1. props에 ="value"가 있으면 default로 지정하는 것
    const location = useLocation();
    const { pathname } = location;
    const collapseName = pathname.split("/").slice(1)[0] === ""? "dashboard" : pathname.split("/").slice(1)[0]

    const { state, setPage } = usePageController();

    useEffect(() => {
        console.log("현재페이지" ,collapseName)
        // reducer로 지정
        setPage(collapseName, "")
        // console.log("reducer 사용 후 컨트롤러", state)
    }, [location]);

    // state가 바뀌었을 때(페이지가 바뀌었을 떄)
    useEffect(() =>{
        console.log("reducer 사용 후 컨트롤러", state)
    },[state])


    // Render all the routes from the routes.js (All the visible items on the Sidenav)
    const renderRoutes = routes.map(({ type, name, icon, title, noCollapse, key, route, href }: RoutesProps) => {
        let returnValue;
        if (state.page === key){ // 현재 페이지이면 아이콘과 버튼 스타일 변경해야 함
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
        }else {
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
        }

        return returnValue;
    });


    return (
        <>
            <SidenavRoot open={true} miniSidenav={true}>
                <SoftBox pt={3} pb={1} px={4} textAlign="center" >
                    <SoftBox component={NavLink} to="/" display="flex" alignItems="center" background-color="blue">
                        {brand && <SoftBox component="img" src={brand} alt="Soft UI Logo" width="2rem" />}
                        <SoftBox
                            width={!brandName && "100%"}
                            textAlign="center"
                            pl={2}
                        >
                            {brandName}
                        </SoftBox>
                    </SoftBox>
                </SoftBox>
                <Divider />
                <List>{renderRoutes}</List>
            </SidenavRoot>
        </>
    );
}

// 2. props에 있는 것에 default로 지정하는 것
Sidenav.defaultProps = {
    color: "wthie",
    brand: ""
}

export default Sidenav;