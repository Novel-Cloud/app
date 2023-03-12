import { useReducer } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AlignCenterIcon from "@/components/icons/editor/AlignCenterIcon";
import * as S from "./index.style";
import SearchBar from "./SearchBar";
import Avartar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  const router = useRouter();
  const [isOpen, toggle] = useReducer((state) => !state, false);

  const { register, handleSubmit } = useForm<{ keyword: string }>();
  const onVaild = (keyword: string) => {
    router.push({
      pathname: "/search",
      query: { keyword },
    });
  };

  return (
    <S.HeaderWrapper
      isOpen={isOpen}
      onSubmit={handleSubmit(({ keyword }) => onVaild(keyword))}
    >
      <Logo />
      <S.HeaderMenuWrapper>
        <SearchBar
          registerReturn={register("keyword")}
          onSearch={handleSubmit(({ keyword }) => onVaild(keyword))}
        />
        <Avartar />
      </S.HeaderMenuWrapper>
      <AlignCenterIcon id="toggle_button" onClick={() => toggle()} />
    </S.HeaderWrapper>
  );
}
