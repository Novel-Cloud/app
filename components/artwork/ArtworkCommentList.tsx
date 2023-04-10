import { useState } from "react";
import { useRouter } from "next/router";
import { Artwork } from "@/types/artwork.interface";
import httpClient from "@/apis";
import useAuthUser from "@/hooks/useAuthUser";
import Button from "../atoms/Button";
import Input from "../atoms/Input";
import * as S from "./ArtworkCommentList.style";
import Avatar from "../atoms/Avatar";

export default function ArtworkCommentList({ artwork }: { artwork: Artwork }) {
  const router = useRouter();
  const { user: userInfo } = useAuthUser();
  const [content, setContent] = useState("");
  const moveToProfile = () =>
    router.push(`/profile/${artwork.writer.memberId}`);
  const handleWrite = () => {
    httpClient.comment
      .post({
        artworkId: artwork.artworkId,
        content,
        parentId: 0,
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
