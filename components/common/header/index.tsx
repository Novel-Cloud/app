import Image from "next/image";
import HeaderLogo from "@/public/assets/HeaderLogo.png";
import * as S from "./index.style";
import SearchBar from "./SearchBar";
import Avartar from "./Avatar";

export default function Header() {
  return (
    <S.HeaderWrapper>
      <Image src={HeaderLogo} alt="header logo" width={200} />
      <SearchBar />
      <Avartar />
    </S.HeaderWrapper>
  );
}
