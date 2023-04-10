import { useRouter } from "next/router";
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
  const router = useRouter();
  const {
    pages: artworkPages,
    customHasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useArtworkList();

  const dummyFn = () => 1;
  const goToEditPage = () => {
    router.push("/profile/edit");
  };

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

        <S.ProfileButtonWrapper>
          <Button
            id="large"
            rounded
            onClick={isMypage ? goToEditPage : dummyFn}
          >
            {isMypage ? "내 정보 관리" : "팔로우"}
          </Button>
        </S.ProfileButtonWrapper>
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
