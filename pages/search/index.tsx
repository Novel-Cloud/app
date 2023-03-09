import ArtworkList from "@/components/atoms/ArtworkList";
import SearchResult from "@/components/search/SearchResult";
import SearchLayout from "@/layout/SearchLayout";
import { useArtworkList } from "@/model/artwork";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const router = useRouter();
  const { data: artworkList } = useArtworkList();
  console.log(router.query.keyword);

  const [keyword, setKeyword] = useState<string>("");

  useEffect(() => {
    setKeyword(router.query.keyword as string);
  }, [router]);

  return (
    <SearchLayout
      app={<ArtworkList artworkList={artworkList} />}
      result={<SearchResult keyword={keyword} />}
    />
  );
}
