import ArtworkList from "@/components/atoms/ArtworkList";
import TagList from "@/components/atoms/TagList";
import MainLayout from "@/layout/MainLayout";
import { useArtworkList, useTagList } from "@/model/artwork";
import React from "react";

export default function Main() {
  const { data: tagList } = useTagList();
  const {
    pages: artworkPages,
    customHasNextPage,
    fetchNextPage,
    isFetchingNextPage,
  } = useArtworkList();
  return (
    <MainLayout
      tags={<TagList tagList={tagList} />}
      app={
        <ArtworkList
          artworkPages={artworkPages}
          customHasNextPage={customHasNextPage}
          fetchNextPage={fetchNextPage}
          isFetchingNextPage={isFetchingNextPage}
          isButtonList
        />
      }
    />
  );
}
