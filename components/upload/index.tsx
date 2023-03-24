import { ArtworkForm } from "@/types/artwork.interface";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { SubmitErrorHandler, SubmitHandler, useForm } from "react-hook-form";
import useFileDrop from "@/hooks/useFileDrop";
import httpClient from "@/apis";
import FileUploader from "../atoms/FileUploader";
import * as S from "./index.style";
import ArtworkFormView from "./ArtworkForm";
import ArtworkTypeRadio from "./ArtworkTypeRadio";
import { LoginButton } from "../login/LoginButton.style";

export default function Upload() {
  const { register, handleSubmit } = useForm<ArtworkForm>();
  const [artworkImageSrc, setArtworkImageSrc] = useState<string>("");

  const {
    files: artworkFiles,
    inputRef: artworkInputRef,
    labelRef: artworkLabelRef,
    isDragActive: artworkIsDragActive,
  } = useFileDrop({
    accept: "image/*",
  });

  const handleImageSrc = (
    fileList: FileList | File[],
    setState: Dispatch<SetStateAction<string>>,
  ) => {
    if (fileList.length) setState(URL.createObjectURL(fileList[0]));
  };

  useEffect(() => {
    if (artworkFiles.length)
      setArtworkImageSrc(URL.createObjectURL(artworkFiles[0]));
  }, [artworkFiles]);

  const onValid: SubmitHandler<ArtworkForm> = (validData) => {
    const artworkFormData = new FormData();
    const rq = {
      title: validData.artworkName,
      content: validData.artworkDescription,
      artworkType: validData.artworkType,
      tags: validData.tagList.split(","),
    };

    artworkFormData.append(
      "rq",
      new Blob([JSON.stringify(rq)], {
        type: "application/json",
      }),
    );

    artworkFormData.append("thumbnail", artworkFiles[0]);
    artworkFiles.forEach((artworkFile) =>
      artworkFormData.append("files", artworkFile),
    );

    httpClient.artwork.post(artworkFormData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

  const onInValid: SubmitErrorHandler<ArtworkForm> = (inValidData) => {
    console.error(inValidData);
  };

  return (
    <S.UploadWrapper onSubmit={handleSubmit(onValid, onInValid)}>
      <S.UploadTitle>Upload</S.UploadTitle>
      <ArtworkTypeRadio register={register} />

      <FileUploader
        onChange={(event) =>
          handleImageSrc(event.target.files || [], setArtworkImageSrc)
        }
        src={artworkImageSrc}
        inputRef={artworkInputRef}
        labelRef={artworkLabelRef}
        isDragActive={artworkIsDragActive}
        label="드래그해서 작품 업로드"
      />

      {artworkFiles.map((artworkFile) => (
        <div>{artworkFile.name}</div>
      ))}

      <ArtworkFormView register={register} />
      <LoginButton type="submit" isFull>
        제출
      </LoginButton>
    </S.UploadWrapper>
  );
}
