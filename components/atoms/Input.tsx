import { Varient } from "@/types/atoms.interface";
import { InputHTMLAttributes } from "react";
import * as S from "./Input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  varient?: Varient;
  isFull?: boolean;
}

export default function Input({
  varient = "primary",
  type = "text",
  isFull = false,
  ...props
}: InputProps) {
  return <S.Input type={type} varient={varient} isFull={isFull} {...props} />;
}
