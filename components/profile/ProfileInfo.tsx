import { useArtworkList } from "@/model/artwork";
import { Member } from "@/types/user.interface";
import ArtworkList from "../atoms/ArtworkList";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import * as S from "./ProfileInfo.style";

interface ProfileInfoProps {
  userInfo: Member;
}
export default function ProfileInfo({ userInfo }: ProfileInfoProps) {
  const { data: artworkList } = useArtworkList();

  return (
    <S.ProfileInfoWrapper>
      <S.ProfileAvatarWrapper>
        <S.ProfileWrapper>
          <span>{userInfo.nickname}</span>
          <Avatar
            src={userInfo.picture}
            alt="프로필사진"
            width={220}
            height={220}
          />

          <S.ProfileButtonWrapper>
            <Button id="small" rounded>
              팔로우
            </Button>
          </S.ProfileButtonWrapper>
        </S.ProfileWrapper>

        <S.ProfileButtonWrapper>
          <Button id="large" rounded>
            팔로우
          </Button>
        </S.ProfileButtonWrapper>
      </S.ProfileAvatarWrapper>

      <S.ProfileInfoTitle>Recent Artwork</S.ProfileInfoTitle>
      <ArtworkList artworkList={artworkList} />
    </S.ProfileInfoWrapper>
  );
}
