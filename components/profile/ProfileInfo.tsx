import config from "@/config";
import { useArtworkList } from "@/model/artwork";
import { Member } from "@/types/user.interface";
import ArtworkList from "../atoms/ArtworkList";
import Avatar from "../atoms/Avatar";
import Button from "../atoms/Button";
import * as S from "./ProfileInfo.style";

interface ProfileInfoProps {
  userInfo: Member;
  isMypage: boolean;
}

export default function ProfileInfo({ userInfo, isMypage }: ProfileInfoProps) {
  const {
    pages: artworkPages,
    customHasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useArtworkList();

  return (
    <S.ProfileInfoWrapper>
      <S.ProfileAvatarWrapper>
        <S.ProfileWrapper>
          <span>{userInfo.nickname}</span>
          <Avatar
            src={userInfo.picture || config.defaultProfile}
            alt="프로필사진"
            width={192}
            height={192}
          />
        </S.ProfileWrapper>

        {isMypage ? (
          <S.ProfileButtonWrapper>
            <Button id="large" rounded>
              나임
            </Button>
          </S.ProfileButtonWrapper>
        ) : (
          <S.ProfileButtonWrapper>
            <Button id="large" rounded>
              팔로우
            </Button>
          </S.ProfileButtonWrapper>
        )}
      </S.ProfileAvatarWrapper>

      <S.ProfileInfoTitle>Recent Artwork</S.ProfileInfoTitle>
      <ArtworkList
        artworkPages={artworkPages}
        customHasNextPage={customHasNextPage}
        fetchNextPage={fetchNextPage}
        isFetchingNextPage={isFetchingNextPage}
      />
    </S.ProfileInfoWrapper>
  );
}
