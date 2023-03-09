import { useForm } from "react-hook-form";
import FileUploader from "../atoms/FileUploader";
import Radio from "../atoms/Radio";
import * as S from "../icons/index.style";

export default function Upload() {
  const { register } = useForm();
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
      <FileUploader src="https://velog.velcdn.com/images/j1min/post/38625166-5e0a-4ffa-b409-4862a484035d/image.png" />
    </S.UploadWrapper>
  );
}
