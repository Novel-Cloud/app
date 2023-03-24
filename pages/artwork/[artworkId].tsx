import ArtworkComment from "@/components/artwork/ArtworkCommentList";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";
import ArtworkPlayer from "@/components/artwork/ArtworkPlayer";
import ArtworkDetailLayout from "@/layout/ArtworkDetailLayout";
import { useArtwork } from "@/model/artwork";
import { useRouter } from "next/router";

export default function ArtworkDetailPage() {
  const router = useRouter();
  const { artworkId } = router.query;
  const { data: artwork } = useArtwork(Number(artworkId));

  return (
    <ArtworkDetailLayout
      app={<ArtworkPlayer artwork={artwork} />}
      detail={<ArtworkDetail artwork={artwork} />}
      comment={<ArtworkComment artwork={artwork} />}
    />
  );
}
