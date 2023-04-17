import { Artwork, Comment } from "@/types/artwork.interface";
import styled from "styled-components";
import { useReducer, useRef, useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import KEY from "@/key";
import httpClient from "@/apis";
import { toast } from "react-toastify";
import Input from "../atoms/Input";
import * as S from "./ArtworkCommentList.style";
import Button from "../atoms/Button";
import Avatar from "../atoms/Avatar";
import Kebab from "../atoms/Kebab";
import EditIcon from "../icons/EditIcon";
import TrashCanIcon from "../icons/TrashCanIcon";

interface CommentViewProps {
  artwork: Artwork;
  comment: Comment;
  moveToProfile: () => void;
}

export default function CommentView({
  artwork,
  comment,
  moveToProfile,
}: CommentViewProps) {
  const queryClient = useQueryClient();
  const [isReplyOpen, toggleReplyOpen] = useReducer((state) => !state, false);
  const [isInputOpen, toggleInputOpen] = useReducer((state) => !state, false);
  const [content, setContent] = useState("");
  const originalContent = useRef(comment.content);
  const [editContent, setEditContent] = useState(comment.content);
  const [isEdit, setIsEdit] = useState(false);

  const handleEditComplete = (commentId: number) => {
    httpClient.comment
      .put({
        commentId,
        content: editContent,
      })
      .then(() => {
        queryClient.invalidateQueries([KEY.COMMENT]);
        setIsEdit(false);
        toast.success("수정 완료되엇데수 ww");
      });
  };

  const handleEditCancel = () => {
    setEditContent(originalContent.current);
    setIsEdit(false);
  };

  const handleDelete = (commentId: number) => {
    httpClient.comment.delete({ data: { commentId } }).then(() => {
      queryClient.invalidateQueries([KEY.COMMENT]);
      setIsEdit(false);
      toast.success("삭제 완료용");
    });
  };

  const handleWrite = (parentId?: number) => {
    httpClient.comment
      .post({
        artworkId: artwork.artworkId,
        content,
        parentId,
      })
      .then(() => {
        queryClient.invalidateQueries([KEY.COMMENT]);
        toast.success("댓글 작성 완료용");
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
      <div style={{ width: "100%" }}>
        <S.CommentWriter onClick={moveToProfile}>
          {comment.writer.nickname}
        </S.CommentWriter>

        {isEdit ? (
          <>
            <Input
              defaultValue={comment.content}
              isFull
              varient="secondary"
              onChange={(e) => {
                setEditContent(e.target.value);
              }}
            />
            <Button onClick={handleEditCancel}>취소</Button>
            <Button onClick={() => handleEditComplete(comment.commentId)}>
              입력
            </Button>
          </>
        ) : (
          <S.CommentContent>{comment.content}</S.CommentContent>
        )}

        <S.CommentDate
          style={{
            marginBottom: "4px",
          }}
        >
          {comment.createdDate}
        </S.CommentDate>
        <Button
          rounded
          style={{
            marginRight: "12px",
            marginBottom: "12px",
            fontSize: "12px",
            padding: "4px 8px",
          }}
          onClick={toggleInputOpen}
        >
          답글 쓰기
        </Button>
        {comment.replyList.length !== 0 && (
          <Button
            rounded
            style={{
              fontSize: "12px",
              padding: "4px 8px",
            }}
            onClick={toggleReplyOpen}
          >
            답글 열기
          </Button>
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
      <KebabWrapper>
        {comment.deletable && !isEdit && (
          <Kebab.Provider>
            <Kebab.Menu className="rounded">
              {comment.editable && (
                <Kebab.Item onClick={() => setIsEdit(true)}>
                  <EditIcon
                    style={{
                      width: "16px",
                      height: "16px",
                      marginRight: "4px",
                    }}
                  />
                  <span>수정</span>
                </Kebab.Item>
              )}
              <Kebab.Item onClick={() => handleDelete(comment.commentId)}>
                <TrashCanIcon
                  style={{
                    width: "16px",
                    height: "16px",
                    marginRight: "4px",
                  }}
                />
                <span>삭제</span>
              </Kebab.Item>
            </Kebab.Menu>
          </Kebab.Provider>
        )}
      </KebabWrapper>
    </S.Comment>
  );
}

const CommentInputWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const KebabWrapper = styled.div`
  position: absolute;
  right: 0;
  top: 0;
`;
