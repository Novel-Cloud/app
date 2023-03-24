import { InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./Radio.style";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
  description?: string;
  defaultChecked?: boolean;
  value?: string;
  registerReturn?: UseFormRegisterReturn;
}

export default function Radio({
  id,
  label,
  description = "",
  defaultChecked,
  value,
  registerReturn,
  ...props
}: RadioProps) {
  return (
    <S.RadioWrapper>
      <S.Radio
        type="radio"
        defaultChecked={defaultChecked}
        id={id}
        value={value}
        {...props}
        {...registerReturn}
      />
      <S.RadioTitleWrapper>
        <S.RadioLabel htmlFor={id}>{label}</S.RadioLabel>
        <S.RadioDescription>{description}</S.RadioDescription>
      </S.RadioTitleWrapper>
    </S.RadioWrapper>
  );
}
