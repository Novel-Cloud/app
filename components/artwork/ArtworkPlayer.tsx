import { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import * as S from "./ArtworkPlayer.style";

export default function ArtworkPlayer({ artwork }: { artwork: Artwork }) {
  return (
    <S.ArtworkPlayerWrapper>
      {artwork.artworkThumbnail && (
        <Image
          src={artwork.artworkThumbnail}
          alt={artwork.artworkName}
          priority
          fill
        />
      )}
    </S.ArtworkPlayerWrapper>
  );
}
