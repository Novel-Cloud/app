import { Artwork } from "@/types/artwork.interface";
import * as S from "./ArtworkComment.style";

export default function ArtworkComment({ artwork }: { artwork: Artwork }) {
  return (
    <S.ArtworkCommentWrapper>
      {artwork.commentList.map((comment) => (
        <div>{comment}</div>
      ))}
    </S.ArtworkCommentWrapper>
  );
}
