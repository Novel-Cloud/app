import { MouseEventHandler, ReactNode } from "react";
import { ButtonStyle } from "./Button";
import * as S from "./FrameButton.style";

interface FrameButtonProps {
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  buttonStyle?: ButtonStyle;
}

export default function FrameButton({
  children,
  onClick,
  ...props
}: FrameButtonProps) {
  return (
    <S.FrameButton onClick={onClick} {...props}>
      {children}
    </S.FrameButton>
  );
}
