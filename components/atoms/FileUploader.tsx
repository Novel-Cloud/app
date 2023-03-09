import Image from "next/image";
import { ChangeEventHandler, InputHTMLAttributes } from "react";
import * as S from "./FileUploader.style";

interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  src: string;
  id?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

export default function FileUploader({
  src,
  id = "file-uploader",
  label = "Upload",
  onChange,
}: FileUploaderProps) {
  return (
    <S.FileUploaderWrapper>
      <Image src={src} alt={src} fill />
      <S.FileUploadButton htmlFor={id}>{label}</S.FileUploadButton>
      <input type="file" id={id} hidden onChange={onChange} />
    </S.FileUploaderWrapper>
  );
}
