import * as S from "./SearchResult.style";

export default function SearchResult({ keyword }: { keyword: string }) {
  return (
    <S.SearchResultWrapper>
      <h1>{keyword}의 검색 결과 100개</h1>
    </S.SearchResultWrapper>
  );
}
