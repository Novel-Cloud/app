import type { Artwork } from "@/types/artwork.interface";
import Image from "next/image";
import * as S from "./ArtworkPlayer.style";

export default function ArtworkPlayer({ artwork }: { artwork: Artwork }) {
  return (
    <S.ArtworkPlayerWrapper>
      {artwork.thumbnail && (
        <Image src={artwork.thumbnail} alt={artwork.title} priority fill />
      )}
    </S.ArtworkPlayerWrapper>
  );
}
