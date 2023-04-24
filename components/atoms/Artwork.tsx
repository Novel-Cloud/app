import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
import type { Artwork } from "@/types/artwork.interface";
import config from "@/config";
import { useState } from "react";
import KEY from "@/key";
import httpClient from "@/apis";
import Image from "next/image";
import { useRouter } from "next/router";
import FilledLikeIcon from "../icons/artwork/FilledLikeIcon";
import LikeIcon from "../icons/artwork/LikeIcon";
import * as S from "./Artwork.style";
import Avatar from "./Avatar";

export default function ArtworkView({
  thumbnail,
  title,
  artworkId,
  likeYn,
  writer,
  tags,
}: Artwork) {
  const router = useRouter();
  const queryClient = useQueryClient();
  const [imageSrc, setImageSrc] = useState(thumbnail);
  const handleLike = () => {
    httpClient.like
      .post({ artworkId })
      .then(() => {
        queryClient.invalidateQueries([KEY.ARTWORKLIST]);
        queryClient.invalidateQueries([KEY.MEMBER]);
        toast.success("좋아요 완료용");
      })
      .catch((e) => toast.error(e.response.data.message));
  };
  const handleTagClick = (content: string) => {
    const prevTags =
      (typeof router.query.tags === "string"
        ? [router.query.tags]
        : router.query.tags) || [];
    const newTags = [...prevTags, content];

    router.push({
      pathname: "/search",
      query: { tags: Array.from(new Set(newTags)) },
    });
  };
  return (
    <S.ArtworkWrapper>
      <S.ArtworkThumbnailWrapper>
        <Image
          src={imageSrc}
          alt={title}
          fill
          onClick={() => router.push(`/artwork/${artworkId}`)}
          onError={() => {
            setImageSrc(config.defaultProfile);
          }}
        />
        <S.ArtworkLikeIconWrapper onClick={handleLike}>
          {likeYn ? <FilledLikeIcon /> : <LikeIcon />}
        </S.ArtworkLikeIconWrapper>
      </S.ArtworkThumbnailWrapper>

      <S.ArtworkTitle onClick={() => router.push(`/artwork/${artworkId}`)}>
        {title}
      </S.ArtworkTitle>
      <S.ArtworkInfoWrapper>
        <S.WriterWrapper
          onClick={() => router.push(`/profile/${writer.memberId}`)}
        >
          <Avatar
            src={writer.picture}
            alt={writer.nickname}
            width={32}
            height={32}
          />
          {writer.nickname}
        </S.WriterWrapper>

        <S.ArtworkTagWrapper>
          {tags.map(({ tagId, content }) => (
            <S.ArtworkTag key={tagId} onClick={() => handleTagClick(content)}>
              #{content}
            </S.ArtworkTag>
          ))}
        </S.ArtworkTagWrapper>
      </S.ArtworkInfoWrapper>
    </S.ArtworkWrapper>
  );
}
