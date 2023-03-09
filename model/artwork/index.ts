import fixture from "@/fixture";

export const useTag = () => {
  return { data: fixture.tagList };
};

export const useArtworkList = () => {
  return { data: fixture.artworkList };
};

export const useArtwork = (artworkId: number) => {
  return { data: fixture.artwork };
};
