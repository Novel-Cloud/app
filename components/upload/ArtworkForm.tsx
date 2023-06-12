import type { ArtworkForm } from "@/types/artwork.interface";
import axios from "axios";
import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import { UseFormRegister } from "react-hook-form";
import Input from "../atoms/Input";
import TextArea from "../atoms/TextArea";
import * as S from "./index.style";
import Button from "../atoms/Button";

export default function ArtworkFormView({
  register,
  tagString,
  setTagString,
}: {
  register: UseFormRegister<ArtworkForm>;
  tagString: string;
  setTagString: Dispatch<SetStateAction<string>>;
}) {
  const [recommendThumbnailUrl, setRecommendThumbnailUrl] =
    useState<string>("");

  const getThumbnail = () => {
    axios
      .patch("http://localhost:8001/create/image", {
        content: tagString,
      })
      .then((r) => {
        setRecommendThumbnailUrl(r.data.url);
      });
  };
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
        onChange={(e) => setTagString(e.target.value)}
      />
      {recommendThumbnailUrl && (
        <Image width={512} height={512} src={recommendThumbnailUrl} alt="" />
      )}
      <Button onClick={getThumbnail}>썸네일 생성</Button>
      <TextArea
        registerReturn={register("artworkDescription")}
        placeholder="Description"
      />
    </S.ArtworkFormWrapper>
  );
}
