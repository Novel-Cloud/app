import Image from "next/image";
import { ChangeEventHandler, InputHTMLAttributes, RefObject } from "react";
import * as S from "./FileUploader.style";

interface FileUploaderProps extends InputHTMLAttributes<HTMLInputElement> {
  src: string;
  id?: string;
  label?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  labelRef: RefObject<HTMLLabelElement>;
  inputRef: RefObject<HTMLInputElement>;
  isDragActive: boolean;
}

export default function FileUploader({
  src,
  id = "file-uploader",
  label = "Upload",
  onChange,
  labelRef,
  inputRef,
  isDragActive,
}: FileUploaderProps) {
  return (
    <S.FileUploaderWrapper
      ref={labelRef}
      htmlFor={id}
      isDragActive={isDragActive}
    >
      {src !== "" && <Image src={src} alt={src} fill />}

      <S.FileUploadButton>{label}</S.FileUploadButton>
      <input ref={inputRef} type="file" id={id} hidden onChange={onChange} />
    </S.FileUploaderWrapper>
  );
}
