import ArtworkDetailLayout from "@/layout/ArtworkDetailLayout";
import { useRouter } from "next/router";

export default function ArtworkDetailPage() {
  const router = useRouter();
  const { artworkId } = router.query;

  return <ArtworkDetailLayout app={<span>{artworkId}</span>} />;
}
