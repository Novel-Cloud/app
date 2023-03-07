import { Tag } from "@/types/fixture.interface";

const tagList: Tag[] = new Array(20)
  .fill(null)
  .map((_, idx) => ({ tagName: "십덕오타쿠", id: idx }));

interface Artwork {
  artworkName: string;
  isLike: boolean;
  artworkThumbnail: string;
  writer: {
    writerName: string;
    writerProfile: string;
  };
  tagList: Tag[];
}

const artwork: Artwork = {
  artworkName: "카와이한 금발녹안쟝",
  isLike: false,
  artworkThumbnail:
    "https://velog.velcdn.com/images/j1min/post/7f3aec7a-de2d-4d9d-b436-b874e5eff50c/image.png",
  writer: {
    writerName: "와따시",
    writerProfile:
      "https://velog.velcdn.com/images/j1min/post/59c03f65-0531-4363-8405-ed93e9a172c1/image.png",
  },
  tagList,
};

const artworkList = new Array(12)
  .fill(null)
  .map((_, idx) => ({ artwork, id: idx }));

export default { tagList, artwork, artworkList };
