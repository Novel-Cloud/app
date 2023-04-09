import { Tag } from "@/types/artwork.interface";
import TagView from "./Tag";
import * as S from "./TagList.style";

export default function TagList({ tagList }: { tagList: Tag[] }) {
  return (
    <S.TagListWrapper>
      <S.TagListTitle>Popular Tags</S.TagListTitle>
      <S.TagWrapper>
        {tagList.map(({ content, tagId }) => (
          <TagView tagName={content} url="/artwork/123" key={tagId} />
        ))}
      </S.TagWrapper>
    </S.TagListWrapper>
  );
}
