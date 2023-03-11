import { Tag } from "@/types/artwork.interface";
import TagView from "./Tag";
import * as S from "./TagList.style";

export default function TagList({ tagList }: { tagList: Tag[] }) {
  return (
    <S.TagListWrapper>
      <S.TagListTitle>Popular Tags</S.TagListTitle>
      <S.TagWrapper>
        {tagList.map(({ tagName, id }) => (
          <TagView tagName={tagName} url="/artwork/123" key={id} />
        ))}
      </S.TagWrapper>
    </S.TagListWrapper>
  );
}
