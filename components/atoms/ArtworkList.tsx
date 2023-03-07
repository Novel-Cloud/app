import { Artwork } from "@/types/artwork.interface";
import ArtworkView from "./Artwork";
import * as S from "./Artwork.style";

export default function ArtworkList({
  artworkList,
}: {
  artworkList: Artwork[];
}) {
  return (
    <S.ArtworkListWrapper>
      {artworkList.map((artwork) => (
        <ArtworkView {...artwork} />
      ))}
    </S.ArtworkListWrapper>
  );
}
