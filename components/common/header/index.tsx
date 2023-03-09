import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as S from "./index.style";
import SearchBar from "./SearchBar";
import Avartar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{ keyword: string }>();
  const onVaild = (keyword: string) => {
    router.push({
      pathname: "/search",
      query: { keyword },
    });
  };

  return (
    <S.HeaderWrapper onSubmit={handleSubmit(({ keyword }) => onVaild(keyword))}>
      <Logo />
      <SearchBar
        registerReturn={register("keyword")}
        onSearch={handleSubmit(({ keyword }) => onVaild(keyword))}
      />
      <Avartar />
    </S.HeaderWrapper>
  );
}
