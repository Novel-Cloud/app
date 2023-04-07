import { Artwork } from "@/types/artwork.interface";
import ButtonList from "../app/ButtonList";
import ArtworkView from "./Artwork";
import * as S from "./Artwork.style";

interface ArtworkListProps {
  artworkList: Artwork[];
  isButtonList?: boolean;
}

export default function ArtworkList({
  artworkList,
  isButtonList = false,
}: ArtworkListProps) {
  return (
    <S.ArtworkFrameWrapper>
      {isButtonList && <ButtonList />}
      <S.ArtworkListWrapper>
        {artworkList.map((artwork) => (
          <ArtworkView {...artwork} key={artwork.artworkId} />
        ))}
      </S.ArtworkListWrapper>
    </S.ArtworkFrameWrapper>
  );
}
