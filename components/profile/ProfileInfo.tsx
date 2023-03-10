import { useArtworkList } from "@/model/artwork";
import ArtworkList from "../atoms/ArtworkList";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import * as S from "./ProfileInfo.style";

export default function ProfileInfo() {
  const { data: artworkList } = useArtworkList();

  return (
    <S.ProfileInfoWrapper>
      <S.ProfileAvatarWrapper>
        <span>min050410min050410min050410min050410</span>
        <Avatar
          src="https://velog.velcdn.com/images/j1min/post/59c03f65-0531-4363-8405-ed93e9a172c1/image.png"
          alt="프로필사진"
          fill
        />
      </S.ProfileAvatarWrapper>

      <S.ProfileButtonWrapper>
        <Button rounded>팔로우</Button>
      </S.ProfileButtonWrapper>

      <S.ProfileInfoTitle>Recent Artwork</S.ProfileInfoTitle>
      <ArtworkList artworkList={artworkList} />
    </S.ProfileInfoWrapper>
  );
}
