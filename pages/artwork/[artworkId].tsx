import httpClient from "@/apis";
import ArtworkComment from "@/components/artwork/ArtworkCommentList";
import ArtworkDetail from "@/components/artwork/ArtworkDetail";
import ArtworkPlayer from "@/components/artwork/ArtworkPlayer";
import ArtworkDetailLayout from "@/layout/ArtworkDetailLayout";
import { Artwork } from "@/types/artwork.interface";
import { deepcopy } from "@/utils/array";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";

interface ArtworkDetailPageProps {
  artwork: Artwork;
}

export default function ArtworkDetailPage({ artwork }: ArtworkDetailPageProps) {
  const router = useRouter();
  console.log(artwork);

  // const { data: artwork } = useArtwork(Number(artworkId));

  return (
    <>d</>
    // <ArtworkDetailLayout
    //   app={<ArtworkPlayer artwork={artwork} />}
    //   detail={<ArtworkDetail artwork={artwork} />}
    //   comment={<ArtworkComment artwork={artwork} />}
    // />
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
  const { data: artwork } = await httpClient.artworkDetail
    .getById({
      params: { id: artworkId },
    })
    .then((r) => ({ data: deepcopy(r.data) }))
    .catch((e) => {
      console.log(e);

      return { data: {} };
    });

  return {
    props: {
      artwork,
    },
    revalidate: 6000,
  };
};
