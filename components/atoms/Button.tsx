import { Varient } from "@/types/atoms.interface";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";
import * as S from "./Button.style";

export type ButtonStyle = "main" | "frame";
export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  varient?: Varient;
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
