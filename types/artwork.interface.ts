import { Tag } from "./fixture.interface";

export interface Artwork {
  id: number;
  artworkName: string;
  isLike: boolean;
  artworkThumbnail: string;
  writer: {
    writerName: string;
    writerProfile: string;
  };
  tagList: Tag[];
}

export interface ArtworkForm {
  artworkType: string;
  artworkThumbnail: string;
  artworkName: string;
  artworkDescription: string;
  tagList: Tag[];
}
