import { Artwork } from "@/types/artwork.interface";
import * as S from "./ArtworkDetail.style";

export default function ArtworkDetail({ artwork }: { artwork: Artwork }) {
  return <S.ArtworkDetailWrapper>{artwork.artworkName}</S.ArtworkDetailWrapper>;
}
