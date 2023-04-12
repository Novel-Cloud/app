import ArtworkList from "@/components/atoms/ArtworkList";
import FilterView from "@/components/search/Filter";
import SearchResult from "@/components/search/SearchResult";
import SearchLayout from "@/layout/SearchLayout";
import { Filter, useSearch } from "@/model/artwork";
import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";

export default function SearchPage() {
  const router = useRouter();

  const [filter, setFilter] = useState<Filter>({
    search: "",
    tags: [],
  });

  const {
    pages: artworkPages,
    customHasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useSearch({}, filter);

  const keyword = (router.query.keyword as string) || "";
  const tags = useMemo(
    () =>
      (typeof router.query.tags === "string"
        ? [router.query.tags]
        : router.query.tags) || [],
    [router.query.tags],
  );

  useEffect(() => {
    setFilter((prev) => ({
      ...prev,
      search: keyword,
      tags,
    }));
  }, [keyword, tags]);

  return (
    <SearchLayout
      filter={<FilterView filter={filter} setFilter={setFilter} />}
      app={
        <ArtworkList
          artworkPages={artworkPages}
          customHasNextPage={customHasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
        />
      }
      result={<SearchResult keyword={filter.search} />}
    />
  );
}
