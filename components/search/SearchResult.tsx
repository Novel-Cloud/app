import * as S from "./SearchResult.style";

interface SearchResultProps {
  keyword: string;
}

export default function SearchResult({ keyword }: SearchResultProps) {
  return (
    <S.SearchResultWrapper>
      <h1>{keyword}의 검색 결과</h1>
    </S.SearchResultWrapper>
  );
}
