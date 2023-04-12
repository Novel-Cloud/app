import { Filter } from "@/model/artwork";
import { useRouter } from "next/router";
import { Dispatch, SetStateAction } from "react";
import Button from "../atoms/Button";

interface TagListViewProps {
  filter: Filter;
  setFilter: Dispatch<SetStateAction<Filter>>;
}

export default function TagListView({ filter, setFilter }: TagListViewProps) {
  const router = useRouter();
  const handleTagClick = (tag: string) => {
    const filteredTags = filter.tags.filter(
      (selectedTag) => tag !== selectedTag,
    );
    setFilter((prev) => ({ ...prev, tags: filteredTags }));
    if (filter.search === "" && filteredTags.length === 0) {
      return router.push("/");
    }
    router.push({
      pathname: "/search",
      query: {
        keyword: filter.search,
        tags: filteredTags,
      },
    });
  };

  return (
    <div>
      {filter.tags.map((tag) => (
        <Button key={tag} onClick={() => handleTagClick(tag)}>
          #{tag}
        </Button>
      ))}
    </div>
  );
}
