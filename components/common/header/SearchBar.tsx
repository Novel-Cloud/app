import SearchIcon from "@/components/icons/editor/SearchIcon";
import { getGreeting } from "@/utils/date";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./SearchBar.style";

export default function SearchBar({
  registerReturn,
  onSearch,
}: {
  registerReturn: UseFormRegisterReturn;
  onSearch: () => void;
}) {
  return (
    <S.SearchBarWrapper>
      <S.SearchBar placeholder={getGreeting()} {...registerReturn} />
      <S.SearchIconWrapper onClick={onSearch}>
        <SearchIcon />
      </S.SearchIconWrapper>
    </S.SearchBarWrapper>
  );
}
