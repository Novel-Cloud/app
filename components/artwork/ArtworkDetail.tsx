import { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import Button from "../atoms/Button";
import * as S from "./ArtworkDetail.style";

export default function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  return (
    <S.ArtworkDetailWrapper>
      <S.ArtworkTitle>{artwork.artworkName}</S.ArtworkTitle>
      <S.ArtworkWriterWrapper>
        <S.ArtworkWriterProfileWrapper>
          <Image
            src={artwork.writer.writerProfile}
            alt={artwork.writer.writerName}
            width={48}
            height={48}
          />
        </S.ArtworkWriterProfileWrapper>
        <S.ArtworkWriterName>{artwork.writer.writerName}</S.ArtworkWriterName>
        <Button varient="secondary" rounded>
          팔로우
        </Button>
      </S.ArtworkWriterWrapper>
      {artwork.content}
    </S.ArtworkDetailWrapper>
  );
}
