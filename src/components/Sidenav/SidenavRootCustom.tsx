import { ReactNode } from 'react';
import Box from '@mui/material/Box';

interface sideNavProps {
  open: boolean;
  children: ReactNode;
}

export default function SidenavRoot({ open, children }: sideNavProps) {
  const sidebarWidth = 250;

  return (
    <Box
      component="nav"
      sx={{ 
        width: sidebarWidth,
        flexShrink: 0,
        boxShadow: 10,
        borderRadius: 2,
        p: 2,
        border: 'none',
        position: 'sticky', // 스크롤 시 고정
        top: 0, // 페이지 상단에 고정
        height: '100vh', // 전체 화면 높이
        marginBottom: "inherit",
        margin:2,
        zIndex: 1200,
        bgcolor: 'white.main',
      }}
      aria-label="sidenav"
    >
      {/* 사이드바 하위 컴포넌트 */}
      {children} 
    </Box>
  );
}
