import { useInView } from "react-intersection-observer";
import styled from "styled-components";
import { useEffect } from "react";
import { FetchNextPageType } from "@/types/common.interface";
import { Artwork } from "@/types/artwork.interface";
import ButtonList from "../app/ButtonList";
import ArtworkView from "./Artwork";
import * as S from "./Artwork.style";
import Loading from "./Loading";

interface ArtworkPages {
  list: Artwork[];
}

interface ArtworkListProps {
  artworkPages: ArtworkPages[];
  customHasNextPage: boolean;
  fetchNextPage: FetchNextPageType<ArtworkPages>;
  isFetchingNextPage: boolean;
  isButtonList?: boolean;
}

export default function ArtworkList({
  artworkPages,
  customHasNextPage,
  fetchNextPage,
  isFetchingNextPage,
  isButtonList = false,
}: ArtworkListProps) {
  const { ref, inView } = useInView();
  useEffect(() => {
    if (inView && customHasNextPage) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage, customHasNextPage]);

  return (
    <S.ArtworkFrameWrapper>
      {isButtonList && <ButtonList />}
      <S.ArtworkListWrapper>
        {artworkPages.map((artwokList) =>
          artwokList.list.map((artwork) => (
            <ArtworkView {...artwork} key={artwork.artworkId} />
          )),
        )}
      </S.ArtworkListWrapper>
      <InfiniteScrollDiv ref={ref}>
        {isFetchingNextPage && <Loading />}
      </InfiniteScrollDiv>
    </S.ArtworkFrameWrapper>
  );
}

const InfiniteScrollDiv = styled.div`
  height: 100px;
`;
