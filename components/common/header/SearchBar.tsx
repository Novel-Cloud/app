import SearchIcon from "@/components/icons/editor/SearchIcon";
import { UseFormRegisterReturn } from "react-hook-form";
import * as S from "./SearchBar.style";

export default function SearchBar({
  registerReturn,
}: {
  registerReturn: UseFormRegisterReturn;
}) {
  return (
    <S.SearchBarWrapper>
      <S.SearchBar placeholder="ohayo!" {...registerReturn} />
      <S.SearchIconWrapper>
        <SearchIcon />
      </S.SearchIconWrapper>
    </S.SearchBarWrapper>
  );
}
