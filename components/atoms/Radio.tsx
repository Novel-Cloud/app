import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./Radio.style";

interface RadioProps {
  id: string;
  label: string;
  description?: string;
  name?: string;
  checked?: boolean;
  value?: string;
  registerReturn?: UseFormRegisterReturn;
}

export default function Radio({
  id,
  label,
  description = "",
  name,
  checked,
  registerReturn,
  ...props
}: RadioProps) {
  return (
    <S.RadioWrapper>
      <S.Radio
        name={name}
        defaultChecked={checked}
        id={id}
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
