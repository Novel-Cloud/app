import { useRouter } from "next/router";
import type { Tag } from "@/types/artwork.interface";
import TagView from "./Tag";
import * as S from "./TagList.style";

export default function TagList({ tagList }: { tagList: Tag[] }) {
  const router = useRouter();
  const tags =
    (typeof router.query.tags === "string"
      ? [router.query.tags]
      : router.query.tags) || [];
  return (
    <S.TagListWrapper>
      <S.TagListTitle>Popular Tags</S.TagListTitle>
      <S.TagWrapper>
        {tagList.map(({ content, tagId }) => (
          <TagView
            tagName={content}
            onClick={() => {
              router.push({
                pathname: "/search",
                query: { tags: [...tags, content] },
              });
            }}
            key={tagId}
          />
        ))}
      </S.TagWrapper>
    </S.TagListWrapper>
  );
}
