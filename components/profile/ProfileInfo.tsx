import { useArtworkList } from "@/model/artwork";
import ArtworkList from "../atoms/ArtworkList";
import * as S from "./ProfileInfo.style";

export default function ProfileInfo() {
  const { data: artworkList } = useArtworkList();

  return (
    <S.ProfileInfoWrapper>
      <S.ProfileInfoTitle>Recent Artwork</S.ProfileInfoTitle>
      <ArtworkList artworkList={artworkList} />
    </S.ProfileInfoWrapper>
  );
}
