export interface Writer {
  memberId: number;
  nickname: string;
  picture: string;
}

export interface S3File {
  attachFileId: number;
  fileName: string;
  fileUidName: string;
  fileSize: number;
}

export type ArtworkType = "NOVEL" | "ARTWORK";

export interface Artwork {
  artworkId: number;
  title: string;
  content: string;
  view: number;
  artworkType: ArtworkType;
  writer: Writer;
  likes: number;
  likeYn: boolean;
  tags: Tag[];
  thumbnail: string;
  attachFiles: S3File[];
  createDate: string;
}

export interface ArtworkForm {
  artworkType: ArtworkType;
  artworkThumbnail: string;
  artworkName: string;
  artworkDescription: string;
  tagList: string;
}

export interface Tag {
  tagId: number;
  content: string;
}

export interface CommentWriter {
  memberId: number;
  nickname: string;
  email: string;
  picture: string;
}

export interface Comment {
  writer: CommentWriter;
  commentId: number;
  content: string;
  createdDate: Date;
  editable: boolean;
  deletable: boolean;
  bookmarks: number;
  bookmarkYn: boolean;
  replyList: Comment[];
}
