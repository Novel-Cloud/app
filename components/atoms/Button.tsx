import { ButtonVarient } from "@/types/atoms.interface";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import * as S from "./Button.style";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: ButtonVarient;
  children?: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export default function Button({
  type = "button",
  varient = "primary",
  children,
  onClick,
  ...props
}: ButtonProps) {
  return (
    <S.Button
      type={type === "button" ? "button" : "submit"}
      onClick={onClick}
      varient={varient}
      {...props}
    >
      {children}
    </S.Button>
  );
}
