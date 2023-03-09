import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import * as S from "./index.style";
import SearchBar from "./SearchBar";
import Avartar from "./Avatar";
import Logo from "./Logo";

export default function Header() {
  const router = useRouter();
  const { register, handleSubmit } = useForm<{ keyword: string }>();

  return (
    <S.HeaderWrapper
      onSubmit={handleSubmit(({ keyword }) =>
        router.push({
          pathname: "/search",
          query: { keyword },
        }),
      )}
    >
      <Logo />
      <SearchBar registerReturn={register("keyword")} />
      <Avartar />
    </S.HeaderWrapper>
  );
}
