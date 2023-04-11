import { Artwork, Comment } from "@/types/artwork.interface";
import styled from "styled-components";
import { useReducer, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import KEY from "@/key";
import httpClient from "@/apis";
import Input from "../atoms/Input";
import * as S from "./ArtworkCommentList.style";
import Button from "../atoms/Button";
import Avatar from "../atoms/Avatar";

export default function CommentView({
  artwork,
  comment,
  moveToProfile,
}: {
  artwork: Artwork;
  comment: Comment;
  moveToProfile: () => void;
}) {
  const queryClient = useQueryClient();
  const [isReplyOpen, toggleReplyOpen] = useReducer((state) => !state, false);
  const [isInputOpen, toggleInputOpen] = useReducer((state) => !state, false);
  const [content, setContent] = useState("");

  const handleWrite = (parentId?: number) => {
    httpClient.comment
      .post({
        artworkId: artwork.artworkId,
        content,
        parentId,
      })
      .then(() => {
        queryClient.invalidateQueries([KEY.COMMENT]);
      });
  };

  return (
    <S.Comment>
      <Avatar
        src={comment.writer.picture}
        alt={comment.writer.nickname}
        width={48}
        height={48}
        onClick={moveToProfile}
      />
      <div>
        <S.CommentWriter onClick={moveToProfile}>
          {comment.writer.nickname}
        </S.CommentWriter>
        <S.CommentContent>{comment.content}</S.CommentContent>
        <S.CommentDate>{comment.createdDate}</S.CommentDate>
        <span onClick={toggleInputOpen}>답글 열기</span>
        {comment.replyList.length !== 0 && (
          <span onClick={toggleReplyOpen}>열기</span>
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

        {isInputOpen && (
          <CommentInputWrapper>
            <Input
              varient="secondary"
              isFull
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
            <Button onClick={() => handleWrite(comment.commentId)}>작성</Button>
          </CommentInputWrapper>
        )}
      </div>
    </S.Comment>
  );
}

const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
