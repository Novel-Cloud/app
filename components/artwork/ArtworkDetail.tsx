import { Artwork } from "@/types/artwork.interface";
import { toast } from "react-toastify";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { useRouter } from "next/router";
import Button from "../atoms/Button";
import EyeIcon from "../icons/artwork/EyeIcon";
import LikeIcon from "../icons/artwork/LikeIcon";
import ShareIcon from "../icons/artwork/ShareIcon";
import * as S from "./ArtworkDetail.style";
import Avatar from "../atoms/Avatar";

export default function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  const router = useRouter();
  const url = `${typeof window !== "undefined" ? window.location.origin : ""}${
    router.asPath
  }`;
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
            <Button varient="secondary" rounded>
              팔로우
            </Button>
          </S.ArtworkWriterWrapper>
        </div>

        <S.ArtworkDateWrapper>
          <S.ArtworkDate>{artwork.createDate}</S.ArtworkDate>
          <S.ArtworkDate>
            <EyeIcon /> {artwork.view}
          </S.ArtworkDate>
          <S.ArtworkDate>
            <LikeIcon />
            {artwork.likes}
          </S.ArtworkDate>

          <CopyToClipboard text={url}>
            <S.ArtworkDate
              onClick={() => {
                toast("복사가 완료되었습니다.");
              }}
            >
              <ShareIcon />
            </S.ArtworkDate>
          </CopyToClipboard>
        </S.ArtworkDateWrapper>
      </S.ArtworkTitleWrapper>
      <S.ArtworkContentWrapper>{artwork.content}</S.ArtworkContentWrapper>
    </S.ArtworkDetailWrapper>
  );
}
