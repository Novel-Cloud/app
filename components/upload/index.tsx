import { useForm } from "react-hook-form";
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
    </S.UploadWrapper>
  );
}
