import { useReducer } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import AlignCenterIcon from "@/components/icons/editor/AlignCenterIcon";
import useAuthUser from "@/hooks/useAuthUser";
import * as S from "./index.style";
import SearchBar from "./SearchBar";
import Logo from "./Logo";
import LoginedUser from "./LoginedUser";

export default function Header() {
  const router = useRouter();
  const [isOpen, toggle] = useReducer((state) => !state, false);
  const { register, handleSubmit } = useForm<{ keyword: string }>();
  const { user: userInfo, isLogined } = useAuthUser();
  const onVaild = (keyword: string) =>
    router.push({
      pathname: "/search",
      query: { keyword },
    });

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
        <LoginedUser userInfo={userInfo} isLogined={isLogined} />
      </S.HeaderMenuWrapper>
      <AlignCenterIcon id="toggle_button" onClick={() => toggle()} />
    </S.HeaderWrapper>
  );
}
