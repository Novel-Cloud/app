import { Artwork } from "@/types/artwork.interface";
import ButtonList from "../app/ButtonList";
import ArtworkView from "./Artwork";
import * as S from "./Artwork.style";

export default function ArtworkList({
  artworkList,
  isButtonList = false,
}: {
  artworkList: Artwork[];
  isButtonList?: boolean;
}) {
  return (
    <S.ArtworkFrameWrapper>
      {isButtonList && <ButtonList />}
      <S.ArtworkListWrapper>
        {artworkList.map((artwork) => (
          <ArtworkView {...artwork} key={artwork.id} />
        ))}
      </S.ArtworkListWrapper>
    </S.ArtworkFrameWrapper>
  );
}
