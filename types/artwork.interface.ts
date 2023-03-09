import { Tag } from "./fixture.interface";

export interface Writer {
  writerName: string;
  writerProfile: string;
  writerId: number;
}

export interface Artwork {
  id: number;
  artworkName: string;
  isLike: boolean;
  artworkThumbnail: string;
  writer: Writer;
  tagList: Tag[];
  commentList: string[];
}

export interface ArtworkForm {
  artworkType: string;
  artworkThumbnail: string;
  artworkName: string;
  artworkDescription: string;
  tagList: Tag[];
}
