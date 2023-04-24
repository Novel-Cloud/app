import type { ArtworkForm } from "@/types/artwork.interface";
import { UseFormRegister } from "react-hook-form";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import * as S from "./index.style";

export default function ArtworkFormView({
  register,
}: {
  register: UseFormRegister<ArtworkForm>;
}) {
  return (
    <S.ArtworkFormWrapper>
      <Input
        varient="secondary"
        isFull
        placeholder="Title"
        registerReturn={register("artworkName")}
      />
      <Input
        varient="secondary"
        isFull
        placeholder="Tags (Separate with commas)"
        registerReturn={register("tagList")}
      />
      <TextArea
        registerReturn={register("artworkDescription")}
        placeholder="Description"
      />
    </S.ArtworkFormWrapper>
  );
}
