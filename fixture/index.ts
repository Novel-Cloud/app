import { Artwork } from "@/types/artwork.interface";
import { Tag } from "@/types/fixture.interface";

const tagList: Tag[] = new Array(20)
  .fill(null)
  .map((_, idx) => ({ tagName: "십덕오타쿠", id: idx }));

const artwork: Artwork = {
  id: 1,
  artworkName: "카와이한 금발녹안쟝",
  isLike: false,
  artworkThumbnail:
    "https://velog.velcdn.com/images/j1min/post/7f3aec7a-de2d-4d9d-b436-b874e5eff50c/image.png",
  writer: {
    writerId: 1,
    writerName: "와따시",
    writerProfile:
      "https://velog.velcdn.com/images/j1min/post/59c03f65-0531-4363-8405-ed93e9a172c1/image.png",
  },
  tagList,
  commentList: new Array(12).fill("코멘트"),
  content:
    "소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ",
};

const artworkList = new Array(12)
  .fill(null)
  .map((_, idx) => ({ ...artwork, id: idx }));

export default { tagList, artwork, artworkList };
