import { Artwork } from "@/types/artwork.interface";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import httpClient from "@/apis";
import { useQueryClient } from "@tanstack/react-query";
import KEY from "@/key";
import { useArtwork } from "@/model/artwork";
import EyeIcon from "../icons/artwork/EyeIcon";
import LikeIcon from "../icons/artwork/LikeIcon";
import ShareIcon from "../icons/artwork/ShareIcon";
import * as S from "./ArtworkDetail.style";
import Avatar from "../atoms/Avatar";
import FilledLikeIcon from "../icons/artwork/FilledLikeIcon";

export default function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  const router = useRouter();
  const url = `${typeof window !== "undefined" ? window.location.origin : ""}${
    router.asPath
  }`;
  const queryClient = useQueryClient();
  const {
    data: { likes, view, likeYn },
  } = useArtwork(artwork.artworkId);

  const handleLike = () => {
    httpClient.like.post({ artworkId: artwork.artworkId }).then(() => {
      queryClient.invalidateQueries([KEY.ARTWORK]);
      toast.success("좋아요 눌럿데수 ww");
    });
  };

  return (
    <S.ArtworkDetailWrapper>
      <S.ArtworkTitleWrapper>
        <div>
          <S.ArtworkTitle>{artwork.title}</S.ArtworkTitle>
          <S.ArtworkWriterWrapper>
            <S.ArtworkOnClickWrapper
              onClick={() => router.push(`/profile/${artwork.writer.memberId}`)}
            >
              <Avatar
                src={artwork.writer.picture}
                alt={artwork.writer.nickname}
                width={48}
                height={48}
              />
              <S.ArtworkWriterName>
                {artwork.writer.nickname}
              </S.ArtworkWriterName>
            </S.ArtworkOnClickWrapper>
            {/* <Button varient="secondary" rounded>
              팔로우
            </Button> */}
          </S.ArtworkWriterWrapper>
        </div>

        <S.ArtworkDateWrapper>
          <S.ArtworkDate>{artwork.createDate}</S.ArtworkDate>
          <S.ArtworkDate>
            <EyeIcon /> {view}
          </S.ArtworkDate>
          <S.ArtworkDate onClick={handleLike} style={{ cursor: "pointer" }}>
            {likeYn ? <FilledLikeIcon /> : <LikeIcon />}
            {likes}
          </S.ArtworkDate>

          <CopyToClipboard text={url}>
            <S.ArtworkDate
              onClick={() => toast.success("복사가 완료되었습니다.")}
            >
              <ShareIcon />
            </S.ArtworkDate>
          </CopyToClipboard>
        </S.ArtworkDateWrapper>
      </S.ArtworkTitleWrapper>
      <S.ArtworkContentWrapper
        dangerouslySetInnerHTML={{ __html: artwork.content }}
      />
    </S.ArtworkDetailWrapper>
  );
}
