import { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import FilledLikeIcon from "../icons/artwork/FilledLikeIcon";
import LikeIcon from "../icons/artwork/LikeIcon";
import * as S from "./Artwork.style";

export default function ArtworkView({
  thumbnail,
  title,
  artworkId,
  likeYn,
  writer,
  tags,
}: Artwork) {
  const router = useRouter();
  return (
    <S.ArtworkWrapper>
      <S.ArtworkThumbnailWrapper>
        <Image
          src={thumbnail}
          alt={title}
          fill
          onClick={() => router.push(`/artwork/${artworkId}`)}
        />
        <S.ArtworkLikeIconWrapper onClick={() => console.log("조아용")}>
          {likeYn ? <FilledLikeIcon /> : <LikeIcon />}
        </S.ArtworkLikeIconWrapper>
      </S.ArtworkThumbnailWrapper>

      <S.ArtworkTitle onClick={() => router.push(`/artwork/${artworkId}`)}>
        {title}
      </S.ArtworkTitle>
      <S.ArtworkInfoWrapper>
        <S.WriterWrapper onClick={() => router.push(`/profile/${writer}`)}>
          <Image
            src={writer.picture}
            alt={writer.nickname}
            width={32}
            height={32}
          />
          {writer.nickname}
        </S.WriterWrapper>

        <S.ArtworkTagWrapper>
          {tags.map((tag, idx) => (
            <S.ArtworkTag key={idx}>#{tag.value}</S.ArtworkTag>
          ))}
        </S.ArtworkTagWrapper>
      </S.ArtworkInfoWrapper>
    </S.ArtworkWrapper>
  );
}
