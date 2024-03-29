import type { Artwork, Tag } from "@/types/artwork.interface";
import type { ShortCut } from "@/types/editor.interface";
import type { Member } from "@/types/user.interface";

const shortCutList: ShortCut[] = [
  { shortcutId: 0, content: "미카모" },
  { shortcutId: 1, content: "네루" },
  { shortcutId: 2, content: "선생" },
  { shortcutId: 3, content: "「」" },
];

const tagList: Tag[] = new Array(20)
  .fill(null)
  .map((_, idx) => ({ content: "십덕오타쿠", tagId: idx }));

const artwork: Artwork = {
  artworkId: 1,
  title: "제목입니다",
  likeYn: false,
  thumbnail:
    "https://velog.velcdn.com/images/j1min/post/86ad283a-daa7-4849-a450-6de9d57e51d8/image.png",
  writer: {
    memberId: 1,
    nickname: "와따시",
    picture:
      "https://velog.velcdn.com/images/j1min/post/59c03f65-0531-4363-8405-ed93e9a172c1/image.png",
  },
  tags: [],
  content:
    "소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ소설연재내용입니다ㅏㅏ",
  artworkType: "ARTWORK",
  attachFiles: [],
  createDate: "",
  likes: 0,
  view: 0,
};

const artworkList = new Array(12)
  .fill(null)
  .map((_, idx) => ({ ...artwork, id: idx }));

const userInfo: Member = {
  email: "",
  memberId: 0,
  nickname: "",
  picture: "/assets/NoImageGirl.png",
  artworks: [],
};

export default { tagList, artwork, artworkList, shortCutList, userInfo };
