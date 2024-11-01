import { forwardRef, Ref } from "react";
import SoftBoxRoot from "components/SoftBox/SoftBoxRoot";

// TypeScript 인터페이스로 props 정의
interface SoftBoxProps {
  variant?: "contained" | "gradient";
  bgColor?: string;
  color?: string;
  opacity?: number;
  borderRadius?: string;
  shadow?: string;
  [key: string]: any; // 나머지 props를 허용하는 인덱스 시그니처
}

// SoftBox 컴포넌트 정의
const SoftBox = forwardRef<HTMLElement, SoftBoxProps>(
  ({ variant = "contained", bgColor = "transparent", color = "dark", opacity = 1, borderRadius = "none", shadow = "none", ...rest }, 
    ref: Ref<HTMLElement>) => (
    <SoftBoxRoot
      {...rest}
      ref={ref}
      ownerState={{ variant, bgColor, color, opacity, borderRadius, shadow }}
    />
  )
);

// 디스플레이 이름 설정 (선택 사항)
SoftBox.displayName = "SoftBox";

export default SoftBox;
