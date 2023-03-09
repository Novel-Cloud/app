import { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import FilledLikeIcon from "../icons/artwork/FilledLikeIcon";
import LikeIcon from "../icons/artwork/LikeIcon";
import * as S from "./Artwork.style";

export default function ArtworkView({
  artworkName,
  artworkThumbnail,
  isLike,
  tagList,
  writer,
  id,
}: Artwork) {
  const router = useRouter();
  return (
    <S.ArtworkWrapper onClick={() => router.push(`/artwork/${id}`)}>
      <S.ArtworkThumbnailWrapper>
        <Image src={artworkThumbnail} alt={artworkName} fill />
        <S.ArtworkLikeIconWrapper>
          {isLike ? <FilledLikeIcon /> : <LikeIcon />}
        </S.ArtworkLikeIconWrapper>
      </S.ArtworkThumbnailWrapper>

      <S.ArtworkTitle>{artworkName}</S.ArtworkTitle>
      <S.ArtworkInfoWrapper>
        <S.WriterWrapper
          onClick={() => router.push(`/profile/${writer.writerId}`)}
        >
          <Image
            src={writer.writerProfile}
            alt={writer.writerName}
            width={32}
            height={32}
          />
          {writer.writerName}
        </S.WriterWrapper>

        <S.ArtworkTagWrapper>
          {tagList.map((tag) => (
            <S.ArtworkTag key={tag.id}>#{tag.tagName}</S.ArtworkTag>
          ))}
        </S.ArtworkTagWrapper>
      </S.ArtworkInfoWrapper>
    </S.ArtworkWrapper>
  );
}
