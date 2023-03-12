import { Artwork } from "@/types/artwork.interface";
import AutoHeightImage from "../atoms/AutoHeightImage";
import * as S from "./ArtworkPlayer.style";

export default function ArtworkPlayer({ artwork }: { artwork: Artwork }) {
  return (
    <S.ArtworkPlayerWrapper>
      {artwork.artworkThumbnail && (
        <AutoHeightImage
          src={artwork.artworkThumbnail}
          alt={artwork.artworkName}
        />
      )}
    </S.ArtworkPlayerWrapper>
  );
}
