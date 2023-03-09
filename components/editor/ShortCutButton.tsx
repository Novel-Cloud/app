import { ButtonHTMLAttributes, ReactNode } from "react";
import Button from "../atoms/Button";

interface ShortCutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function ShortCutButton({
  children,
  ...props
}: ShortCutButtonProps) {
  return <Button {...props}>{children}</Button>;
}
