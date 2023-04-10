import httpClient from "@/apis";
import fixture from "@/fixture";
import KEY from "@/key";
import { Artwork, Tag } from "@/types/artwork.interface";
import { useInfiniteQuery, useQuery } from "@tanstack/react-query";

export interface PaginationRequest {
  page?: number;
  size?: number;
}

export interface PaginationResponse {
  page: number;
  size: number;
  totalCount: number;
  totalPages: number;
}

interface ArtworkList {
  list: Artwork[];
  pagination: PaginationResponse;
}

export const useTagList = () => {
  const { data } = useQuery<{ list: Tag[] }>([KEY.TAG], () =>
    httpClient.tag.get().then((r) => r.data),
  );
  return { data: data?.list || [] };
};

export const useArtworkList = (pagination?: PaginationRequest) => {
  const { data, isFetchingNextPage, fetchNextPage } =
    useInfiniteQuery<ArtworkList>(
      [KEY.ARTWORKLIST],
      ({ pageParam = 1 }) =>
        httpClient.artwork
          .view({
            params: {
              page: pageParam,
              size: pagination?.size || 12,
            },
          })
          .then((r) => r.data),
      {
        getNextPageParam: (lastPage) => lastPage.pagination.page + 1,
      },
    );

  const customHasNextPage =
    ((data?.pageParams[data.pageParams.length - 1] as number) || 1) <
    (data?.pages[0].pagination.totalPages || 0);

  return {
    pages: data?.pages || [{ list: [] }],
    isFetchingNextPage,
    customHasNextPage,
    fetchNextPage,
  };
};

export const useArtwork = (artworkId: number) => {
  const { data } = useQuery([KEY.ARTWORK], () =>
    httpClient.artworkDetail
      .getById({ params: { id: artworkId } })
      .then((r) => r.data),
  );
  return { data: data || fixture.artwork };
};

interface SavedContent {
  temporaryArtworkId: null;
  createdDate: null;
  content: null;
}

export const useContent = () => {
  const { data } = useQuery<SavedContent>([KEY.CONTENT], () =>
    httpClient.artworkSave.get().then((r) => r.data),
  );
  return { data: data?.content || "" };
};
