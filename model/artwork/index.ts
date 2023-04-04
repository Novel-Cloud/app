import httpClient from "@/apis";
import fixture from "@/fixture";
import KEY from "@/key";
import { useQuery } from "@tanstack/react-query";

export const useTag = () => {
  return { data: fixture.tagList };
};

export const useArtworkList = () => {
  return { data: fixture.artworkList };
};

export const useArtwork = (artworkId: number) => {
  return { data: fixture.artwork };
};

export const useContent = () => {
  const { data } = useQuery([KEY.CONTENT], () =>
    httpClient.artworkSave.get().then((r) => r.data),
  );
  console.log(data);
  return data;
};
