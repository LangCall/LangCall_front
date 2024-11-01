// @mui material components
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Theme } from "@mui/material/styles/createTheme";

// OwnerState 인터페이스 정의
interface OwnerState {
  variant?: "contained" | "gradient";
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
}


const StyleBox = styled(Box)<{ ownerState: OwnerState }>(({ theme, ownerState }) => {
  const { palette } = theme as Theme;
  const { variant, bgColor, color, opacity, borderRadius="none", shadow="none" } = ownerState;
  const { grey, primary } = palette;

  // 스타일 로직
  return {
    backgroundColor: bgColor,
    color: color || palette.text.primary,
    opacity: opacity,
    borderRadius: borderRadius,
    boxShadow: shadow,
    // 추가적인 스타일...
  };
});

export default StyleBox;

