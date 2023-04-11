import ArtworkList from "@/components/atoms/ArtworkList";
import FilterView from "@/components/search/Filter";
import SearchResult from "@/components/search/SearchResult";
import SearchLayout from "@/layout/SearchLayout";
import { Filter, useSearch } from "@/model/artwork";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function SearchPage() {
  const router = useRouter();
  const [filter, setFilter] = useState<Filter>({
    search: "",
  });

  const {
    pages: artworkPages,
    customHasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearch({}, filter);

  useEffect(() => {
    setFilter((prev) => ({ ...prev, search: router.query.keyword as string }));
  }, [router]);

  return (
    <SearchLayout
      filter={<FilterView filter={filter} setFilter={setFilter} />}
      app={
        <ArtworkList
          artworkPages={artworkPages}
          customHasNextPage={customHasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isButtonList
        />
      }
      result={<SearchResult keyword={filter.search || ""} />}
    />
  );
}
