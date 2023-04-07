import { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import { useRouter } from "next/router";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./ArtworkCommentList.style";

export default function ArtworkCommentList({ artwork }: { artwork: Artwork }) {
  const router = useRouter();
  const moveToProfile = () =>
    router.push(`/profile/${artwork.writer.memberId}`);

  return (
    <S.CommentWrapper>
      <S.CommentTitle>댓글</S.CommentTitle>
      <S.CommentInputWrapper>
        <Image
          src={artwork.writer.picture}
          alt={artwork.writer.nickname}
          width={52}
          height={52}
        />
        <Input varient="secondary" isFull />
        <Button rounded>전송</Button>
      </S.CommentInputWrapper>
      {/* {artwork.commentList.map((comment) => (
        <Comment
          artwork={artwork}
          comment={comment}
          moveToProfile={moveToProfile}
        />
      ))} */}
    </S.CommentWrapper>
  );
}
