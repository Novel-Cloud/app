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
