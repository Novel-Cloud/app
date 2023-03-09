import { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import Button from "../atoms/Button";
import EyeIcon from "../icons/artwork/EyeIcon";
import LikeIcon from "../icons/artwork/LikeIcon";
import ShareIcon from "../icons/artwork/ShareIcon";
import * as S from "./ArtworkDetail.style";

export default function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  return (
    <S.ArtworkDetailWrapper>
      <S.ArtworkTitleWrapper>
        <div>
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
            <S.ArtworkWriterName>
              {artwork.writer.writerName}
            </S.ArtworkWriterName>
            <Button varient="secondary" rounded>
              팔로우
            </Button>
          </S.ArtworkWriterWrapper>
        </div>

        <S.ArtworkDateWrapper>
          <S.ArtworkDate>2023. 3. 7.</S.ArtworkDate>
          <S.ArtworkDate>
            <EyeIcon /> 14.8만
          </S.ArtworkDate>
          <S.ArtworkDate>
            <LikeIcon />
            6.6천
          </S.ArtworkDate>
          <S.ArtworkDate>
            <ShareIcon />
          </S.ArtworkDate>
        </S.ArtworkDateWrapper>
      </S.ArtworkTitleWrapper>
      <S.ArtworkContentWrapper>{artwork.content}</S.ArtworkContentWrapper>
    </S.ArtworkDetailWrapper>
  );
}
