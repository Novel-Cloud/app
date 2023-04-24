import { useEffect } from "react";
import httpClient from "@/apis";
import ArtworkComment from "@/components/artwork/ArtworkCommentList";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";
import ArtworkPlayer from "@/components/artwork/ArtworkPlayer";
import ArtworkDetailLayout from "@/layout/ArtworkDetailLayout";
import type { Artwork } from "@/types/artwork.interface";
import { deepcopy } from "@/utils/array";
import { GetStaticProps } from "next";
import Page404 from "../404";

interface ArtworkDetailPageProps {
  artwork: Artwork;
  is404: boolean;
}

export default function ArtworkDetailPage({
  artwork,
  is404,
}: ArtworkDetailPageProps) {
  useEffect(() => {
    if (!is404) {
      httpClient.artworkView
        .post({ artworkId: artwork.artworkId })
        .then((r) => r.data);
    }
  }, [artwork, is404]);

  if (is404) return <Page404 />;

  return (
    <ArtworkDetailLayout
      app={<ArtworkPlayer artwork={artwork} />}
      detail={<ArtworkDetail artwork={artwork} />}
      comment={<ArtworkComment artwork={artwork} />}
    />
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const artworkId = context.params?.artworkId || 0;
  const { data: artwork, is404 } = await httpClient.artworkDetail
    .getById({
      params: { id: artworkId },
    })
    .then((r) => ({ data: deepcopy(r.data), is404: false }))
    .catch(() => ({ data: {}, is404: true }));

  return {
    props: {
      artwork,
      is404,
    },
    revalidate: 6000,
  };
};
