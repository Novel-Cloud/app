import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonVarient = "primary" | "secondary";
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
    <button
      type={type === "button" ? "button" : "submit"}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}
