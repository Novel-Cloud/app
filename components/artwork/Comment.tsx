import { Artwork, Comment } from "@/types/artwork.interface";
import Image from "next/image";
import { useReducer } from "react";
import Input from "../atoms/Input";
import * as S from "./ArtworkCommentList.style";

export default function CommentView({
  artwork,
  comment,
  moveToProfile,
}: {
  artwork: Artwork;
  comment: Comment;
  moveToProfile: () => void;
}) {
  const [isReplyOpen, toggleReplyOpen] = useReducer((state) => !state, false);
  const [isInputOpen, toggleInputOpen] = useReducer((state) => !state, false);

  return (
    <S.Comment>
      <Image
        src={artwork.writer.writerProfile}
        alt={artwork.writer.writerName}
        width={48}
        height={48}
        onClick={moveToProfile}
      />
      <div>
        <S.CommentWriter onClick={moveToProfile}>
          {artwork.writer.writerName}
        </S.CommentWriter>
        <S.CommentContent>{comment.content}</S.CommentContent>
        <S.CommentDate>2022. 2. 3.</S.CommentDate>
        <span onClick={() => toggleInputOpen()}>답글</span>
        {comment.replyList.length !== 0 && (
          <span onClick={() => toggleReplyOpen()}>열기</span>
        )}

        {isReplyOpen && (
          <>
            {comment.replyList.map((reply) => (
              <CommentView
                comment={reply}
                artwork={artwork}
                moveToProfile={moveToProfile}
              />
            ))}
          </>
        )}

        {isInputOpen && <Input varient="secondary" isFull />}
      </div>
    </S.Comment>
  );
}
