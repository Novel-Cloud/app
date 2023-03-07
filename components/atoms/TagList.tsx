import { Tag } from "@/types/fixture.interface";
import TagView from "./Tag";
import * as S from "./TagList.style";

export default function TagList({ tagList }: { tagList: Tag[] }) {
  return (
    <S.TagWrapper>
      {tagList.map(({ tagName, id }) => (
        <TagView tagName={tagName} url="/artwork/123" key={id} />
      ))}
    </S.TagWrapper>
  );
}
