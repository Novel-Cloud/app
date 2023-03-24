
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
  commentList: Comment[];
  content: string;
}

export interface ArtworkForm {
  artworkType: string;
  artworkThumbnail: string;
  artworkName: string;
  artworkDescription: string;
  tagList: Tag[];
}

export interface Tag {
  tagName: string;
  id: number;
}

export interface CommentWriter {
  memberId: number;
  name: string;
  profileImageUrl: string;
  email: string;
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