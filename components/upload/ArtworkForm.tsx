import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import * as S from "./index.style";

export default function ArtworkFormView() {
  return (
    <S.ArtworkFormWrapper>
      <Input varient="secondary" isFull placeholder="Title" />
      <Input
        varient="secondary"
        isFull
        placeholder="Tags (Separate with commas)"
      />
      <TextArea placeholder="Description" />
    </S.ArtworkFormWrapper>
  );
}
