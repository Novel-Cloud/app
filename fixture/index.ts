import { Tag } from "@/types/fixture.interface";

const tagList: Tag[] = new Array(10)
  .fill(null)
  .map((tagData, idx) => ({ tagName: "십덕오타쿠", id: idx }));

export default { tagList };
