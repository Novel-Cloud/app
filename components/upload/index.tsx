import { ArtworkForm } from "@/types/artwork.interface";
import { ChangeEvent, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import useFileDrop from "@/hooks/useFileDrop";
import FileUploader from "../atoms/FileUploader";
import * as S from "./index.style";
import ArtworkFormView from "./ArtworkForm";
import ArtworkTypeRadio from "./ArtworkTypeRadio";
import { LoginButton } from "../login/LoginButton.style";

export default function Upload() {
  const { register } = useForm<ArtworkForm>();
  const [imageSrc, setImageSrc] = useState<string>("");
  const { files, inputRef, labelRef, isDragActive } = useFileDrop();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files)
      setImageSrc(URL.createObjectURL(event.target.files[0]));
  };

  useEffect(() => {
    console.log(files);
  }, [files]);

  return (
    <S.UploadWrapper>
      <S.UploadTitle>Upload</S.UploadTitle>
      <ArtworkTypeRadio register={register} />
      <FileUploader
        onChange={handleChange}
        src={imageSrc}
        inputRef={inputRef}
        labelRef={labelRef}
        isDragActive={isDragActive}
      />
      <ArtworkFormView />
      <LoginButton isFull>제출</LoginButton>
    </S.UploadWrapper>
  );
}
