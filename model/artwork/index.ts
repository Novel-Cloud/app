import fixture from "@/fixture";

export const useTag = () => {
  return { data: fixture.tagList };
};

export const useArtworkList = () => {
  return { data: fixture.artworkList };
};
