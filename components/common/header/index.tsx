import * as S from "./index.style";
import SearchBar from "./SearchBar";
import Avartar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  return (
    <S.HeaderWrapper>
      <Logo />
      <SearchBar />
      <Avartar />
    </S.HeaderWrapper>
  );
}
