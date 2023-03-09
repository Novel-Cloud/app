import { Artwork } from "@/types/artwork.interface";
import ButtonList from "../app/ButtonList";
import ArtworkView from "./Artwork";
import * as S from "./Artwork.style";

export default function ArtworkList({
  artworkList,
}: {
  artworkList: Artwork[];
}) {
  return (
    <S.ArtworkFrameWrapper>
      <ButtonList />
      <S.ArtworkListWrapper>
        {artworkList.map((artwork) => (
          <ArtworkView {...artwork} key={artwork.id} />
        ))}
      </S.ArtworkListWrapper>
    </S.ArtworkFrameWrapper>
  );
}
