import ArtworkList from "@/components/atoms/ArtworkList";
import TagList from "@/components/atoms/TagList";
import MainLayout from "@/layout/MainLayout";
import { useArtworkList, useTag } from "@/model/artwork";
import React from "react";

export default function Main() {
  const { data: tagList } = useTag();
  const { data: artworkList } = useArtworkList();
  return (
    <MainLayout
      app={<ArtworkList artworkList={artworkList} />}
      tags={<TagList tagList={tagList} />}
    />
  );
}
