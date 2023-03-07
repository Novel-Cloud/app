import SearchIcon from "@/components/icons/editor/SearchIcon";
import * as S from "./SearchBar.style";

export default function SearchBar() {
  return (
    <S.SearchBarWrapper>
      <S.SearchBar placeholder="ohayo!" />
      <S.SearchIconWrapper>
        <SearchIcon />
      </S.SearchIconWrapper>
    </S.SearchBarWrapper>
  );
}