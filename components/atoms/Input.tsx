import { Varient } from "@/types/atoms.interface";
import { InputHTMLAttributes } from "react";
import * as S from "./Input.style";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  varient?: Varient;
}

export default function Input({
  varient = "primary",
  type = "text",
}: InputProps) {
  return <S.Input type={type} varient={varient} />;
}
