import { ChangeEvent, useState } from "react";
import { useForm } from "react-hook-form";
import FileUploader from "../atoms/FileUploader";
import Radio from "../atoms/Radio";
import * as S from "../icons/index.style";

export default function Upload() {
  const { register } = useForm();
  const [imageSrc, setImageSrc] = useState<string>("");
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setImageSrc(URL.createObjectURL(event.target.files[0]));
    }
  };
  return (
    <S.UploadWrapper>
      <S.UploadTitle>Upload</S.UploadTitle>
      <Radio
        id="novel"
        label="Novel"
        registerReturn={register("artworkType")}
        description="Light Novel, Fanfiction, Delusion or Everythings"
      />
      <Radio
        id="artwork"
        label="Artwork"
        registerReturn={register("artworkType")}
        description="A picture you drew [not ai picture]"
      />
      <FileUploader onChange={handleChange} src={imageSrc} />
    </S.UploadWrapper>
  );
}
