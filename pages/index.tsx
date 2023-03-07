import ArtworkList from "@/components/app/ArtworkList";
import Tags from "@/components/app/TagList";
import MainLayout from "@/layout/MainLayout";
import { useTag } from "@/model/artwork";
import React from "react";

export default function Main() {
  const { data: tagList } = useTag();
  return <MainLayout app={<ArtworkList />} tags={<Tags tagList={tagList} />} />;
}
