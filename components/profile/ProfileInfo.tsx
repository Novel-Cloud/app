import { useRouter } from "next/router";
import type { Member } from "@/types/user.interface";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import * as S from "./ProfileInfo.style";
import { ArtworkListWrapper } from "../atoms/Artwork.style";
import ArtworkView from "../atoms/Artwork";

interface ProfileInfoProps {
  userInfo: Member;
  isMyPage: boolean;
}

export default function ProfileInfo({ userInfo, isMyPage }: ProfileInfoProps) {
  const router = useRouter();
  const dummyFn = () => 1;
  const goToProfileEditPage = () => router.push("/profile/edit");

  return (
    <S.ProfileInfoWrapper>
      <S.ProfileAvatarWrapper>
        <S.ProfileWrapper>
          <span>{userInfo.nickname}</span>
          <Avatar
            src={userInfo.picture}
            alt="프로필사진"
            width={192}
            height={192}
          />
        </S.ProfileWrapper>

        <S.ProfileButtonWrapper>
          <Button
            id="large"
            rounded
            onClick={isMyPage ? goToProfileEditPage : dummyFn}
          >
            {isMyPage ? "내 정보 관리" : "팔로우"}
          </Button>
        </S.ProfileButtonWrapper>
      </S.ProfileAvatarWrapper>

      <S.ProfileInfoTitle>Recent Artwork</S.ProfileInfoTitle>

      <ArtworkListWrapper>
        {userInfo.artworks.map((artwork) => (
          <ArtworkView {...artwork} key={artwork.artworkId} />
        ))}
      </ArtworkListWrapper>
    </S.ProfileInfoWrapper>
  );
}
