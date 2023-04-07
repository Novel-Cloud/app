import { Tag } from "@/types/artwork.interface";
import TagView from "./Tag";
import * as S from "./TagList.style";

export default function TagList({ tagList }: { tagList: Tag[] }) {
  return (
    <S.TagListWrapper>
      <S.TagListTitle>Popular Tags</S.TagListTitle>
      <S.TagWrapper>
        {tagList.map(({ value }, idx) => (
          <TagView tagName={value} url="/artwork/123" key={idx} />
        ))}
      </S.TagWrapper>
    </S.TagListWrapper>
  );
}
