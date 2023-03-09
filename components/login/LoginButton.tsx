import { MouseEventHandler, ReactNode } from "react";
import * as S from "./LoginButton.style";

interface FrameButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function FrameButton({
  children,
  onClick,
  ...props
}: FrameButtonProps) {
  return (
    <S.LoginButton onClick={onClick} {...props}>
      {children}
    </S.LoginButton>
  );
}
