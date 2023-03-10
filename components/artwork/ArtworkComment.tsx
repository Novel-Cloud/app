import { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./ArtworkComment.style";

export default function ArtworkComment({ artwork }: { artwork: Artwork }) {
  return (
    <S.CommentWrapper>
      <S.CommentTitle>댓글</S.CommentTitle>

      <S.CommentInputWrapper>
        <Image
          src={artwork.writer.writerProfile}
          alt={artwork.writer.writerName}
          width={52}
          height={52}
        />
        <Input varient="secondary" isFull />
        <Button rounded>전송</Button>
      </S.CommentInputWrapper>

      {artwork.commentList.map((comment) => (
        <S.Comment>
          <Image
            src={artwork.writer.writerProfile}
            alt={artwork.writer.writerName}
            width={48}
            height={48}
          />
          <div>
            <S.CommentWriter>{artwork.writer.writerName}</S.CommentWriter>
            <S.CommentContent>{comment}</S.CommentContent>
            <S.CommentDate>2022. 2. 3.</S.CommentDate>
          </div>
        </S.Comment>
      ))}
    </S.CommentWrapper>
  );
}
