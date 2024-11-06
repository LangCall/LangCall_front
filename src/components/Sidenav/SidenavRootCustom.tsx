import { ReactNode } from 'react'

import Drawer from "@mui/material/Drawer";
import Box from '@mui/material/Box';



interface sideNavProps {
    open: boolean,
    children: ReactNode
}

export default function SidenavRoot({ open, children }: sideNavProps) {

  const sidebarWidth = 250;
  const xxl = "0px 10px 30px rgba(0, 0, 0, 0.1)";

  // Remove this const when copying and pasting into your project.
  const container = window !== undefined ? () => window.document.body : undefined;

    return (
        <Box
          component="nav"
          sx={{ 
            width: { sm: sidebarWidth }, 
            flexShrink: { sm: 0 }, 
            boxShadow: 1,
            borderRadius: 2,
            p: 2,
            minWidth: 300,
            marginBottom: "inherit",
            border: 'none',
            height: 1,
            margin:2
          }}
          aria-label="sidenav"
        >
            {children}
        </Box>
    )
}
