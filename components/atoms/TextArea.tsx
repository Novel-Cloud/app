import { TextareaHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./TextArea.style";

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  registerReturn: UseFormRegisterReturn;
}

export default function TextArea({ registerReturn, ...props }: TextAreaProps) {
  return <S.TextArea {...props} {...registerReturn} />;
}
