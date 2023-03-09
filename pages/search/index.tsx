import ArtworkList from "@/components/atoms/ArtworkList";
import SearchLayout from "@/layout/SearchLayout";
import { useArtworkList } from "@/model/artwork";
import { useRouter } from "next/router";

export default function SearchPage() {
  const router = useRouter();
  const { data: artworkList } = useArtworkList();
  console.log(router.query.keyword);

  return <SearchLayout app={<ArtworkList artworkList={artworkList} />} />;
}
