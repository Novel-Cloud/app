import { ReactNode } from "react";
import * as S from "./index.style";

interface FrameProps {
  children: ReactNode;
}

export default function MainFrame({ children }: FrameProps) {
  return <S.FrameWrapper>{children}</S.FrameWrapper>;
}
