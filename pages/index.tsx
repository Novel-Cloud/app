import ArtworkList from "@/components/atoms/ArtworkList";
import TagList from "@/components/atoms/TagList";
import MainLayout from "@/layout/MainLayout";
import { useArtworkList, useTag } from "@/model/artwork";
import React from "react";

export default function Main() {
  const { data: tagList } = useTag();
  const { pages: artworkPages } = useArtworkList();
  return (
    <MainLayout
      tags={<TagList tagList={tagList} />}
      app={<ArtworkList artworkPages={artworkPages} isButtonList />}
    />
  );
}
