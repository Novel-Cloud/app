import type { Varient } from "@/types/atoms.interface";
import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./Input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  varient?: Varient;
  isFull?: boolean;
  registerReturn?: UseFormRegisterReturn;
}

export default function Input({
  varient = "primary",
  type = "text",
  isFull = false,
  registerReturn,
  ...props
}: InputProps) {
  return (
    <S.Input
      type={type}
      varient={varient}
      isFull={isFull}
      {...registerReturn}
      {...props}
    />
  );
}
