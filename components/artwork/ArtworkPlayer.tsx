import Image from "next/image";
import * as S from "./ArtworkPlayer.style";

interface ArtworkPlayerProps {
  src: string;
}

export default function ArtworkPlayer({ src }: ArtworkPlayerProps) {
  return (
    <S.ArtworkPlayerWrapper>
      <Image src={src} alt={src} />
    </S.ArtworkPlayerWrapper>
  );
}
