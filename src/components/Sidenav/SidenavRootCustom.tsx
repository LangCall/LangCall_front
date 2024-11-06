import { ReactNode } from 'react'

import Drawer from "@mui/material/Drawer";
import { hexToRgb } from '@mui/material';
import { HeightTwoTone } from '@mui/icons-material';



interface sideNavProps {
    open: boolean,
    children: ReactNode
}

export default function SidenavRoot({ open, children }: sideNavProps) {

    const sidebarWidth = 250;
    const xxl = "0px 10px 30px rgba(0, 0, 0, 0.1)";

    const drawerOpenStyles = {
        width: sidebarWidth,
        height:'100%',
        backgroundColor: 'white',
        boxShadow: xxl,
        marginBottom: "inherit",
        left: "0",
    };


    return (
        <div style={drawerOpenStyles} >
            {children}
        </div>
    )
}
