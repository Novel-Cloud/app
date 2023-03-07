import { Tag } from "@/types/fixture.interface";

const tagList: Tag[] = new Array(20)
  .fill(null)
  .map((_, idx) => ({ tagName: "십덕오타쿠", id: idx }));

export default { tagList };
