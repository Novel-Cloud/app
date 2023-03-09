import { TextareaHTMLAttributes } from "react";
import * as S from "./TextArea.style";

export default function TextArea({
  ...props
}: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return <S.TextArea {...props} />;
}
