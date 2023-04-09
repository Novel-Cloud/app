import { Artwork } from "@/types/artwork.interface";
import ButtonList from "../app/ButtonList";
import ArtworkView from "./Artwork";
import * as S from "./Artwork.style";

interface ArtworkPages {
  list: Artwork[];
}

interface ArtworkListProps {
  artworkPages: ArtworkPages[];
  isButtonList?: boolean;
}

export default function ArtworkList({
  artworkPages,
  isButtonList = false,
}: ArtworkListProps) {
  return (
    <S.ArtworkFrameWrapper>
      {isButtonList && <ButtonList />}
      <S.ArtworkListWrapper>
        {artworkPages.map((artwokList) =>
          artwokList.list.map((artwork) => (
            <ArtworkView {...artwork} key={artwork.artworkId} />
          )),
        )}
      </S.ArtworkListWrapper>
    </S.ArtworkFrameWrapper>
  );
}
