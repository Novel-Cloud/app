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
  const [wordcloudUrl, setWordcloudUrl] = useState<string>("");
  const [contentString, setContent] = useState<string>("");

  const getThumbnail = () => {
    axios
      .patch("http://localhost:8001/create/image", {
        content: tagString,
      })
      .then((r) => {
        setRecommendThumbnailUrl(r.data.url);
      });
  };

  const getWordCloud = () => {
    axios
      .patch("http://localhost:8000/wordcloud", {
        content:
          "안녕하세요, 급구입니다! 알바를 쉽게 구하다, 급구! 급구는 구인구직 시장에 새로운 문화를 선도하고 있습니다. 급구를 운영하는 주니더는 2014년에 설립된 스타트업이며, 기존에 없던 형태의 구인구직 서비스 플랫폼을 제공하는 회사입니다. 급구는 **실시간 알람과 모바일에 최적화된 기능**을 활용하여 단기 구인구직 시장을 개척 했고 쉽고 빠른 채용 과정을 통해 좋은 평가를 얻고 있습니다. 또한 단기알바부터 장기알바까지 구인구직 빅데이터 분석, 인공지능 등의 기술을 적용하여 사장님과 아르바이트생 모두에게 맞춤형 아르바이트 정보를 제공하고 있습니다.",
      })
      .then((r) => {
        setWordcloudUrl(r.data.url);
        console.log(r.data.url);
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
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <Button onClick={getWordCloud}>단어구름 생성</Button>
      {wordcloudUrl && (
        <img src={wordcloudUrl} alt="" width={512} height={512} />
      )}
    </S.ArtworkFormWrapper>
  );
}
