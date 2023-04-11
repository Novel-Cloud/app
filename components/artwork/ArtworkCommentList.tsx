import { useState } from "react";
import { useRouter } from "next/router";
import { Artwork } from "@/types/artwork.interface";
import httpClient from "@/apis";
import useAuthUser from "@/hooks/useAuthUser";
import { useCommentList } from "@/model/artwork";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./ArtworkCommentList.style";
import Avatar from "../atoms/Avatar";
import CommentView from "./Comment";

export default function ArtworkCommentList({ artwork }: { artwork: Artwork }) {
  const router = useRouter();
  const { user: userInfo } = useAuthUser();
  const { data: commentList } = useCommentList(artwork.artworkId);
  const [content, setContent] = useState("");

  const moveToProfile = () =>
    router.push(`/profile/${artwork.writer.memberId}`);

  const handleWrite = () => {
    httpClient.comment
      .post({
        artworkId: artwork.artworkId,
        content,
      })
      .then(() => {});
  };

  return (
    <S.CommentWrapper>
      <S.CommentTitle>댓글</S.CommentTitle>
      <S.CommentInputWrapper>
        <Avatar
          src={userInfo.picture}
          alt={userInfo.nickname}
          width={52}
          height={52}
        />
        <Input
          varient="secondary"
          isFull
          onChange={(e) => {
            setContent(e.target.value);
          }}
        />
        <Button rounded onClick={handleWrite}>
          전송
        </Button>
      </S.CommentInputWrapper>
      {commentList.map((comment) => (
        <CommentView
          artwork={artwork}
          moveToProfile={moveToProfile}
          comment={comment}
          key={comment.commentId}
        />
      ))}
    </S.CommentWrapper>
  );
}
