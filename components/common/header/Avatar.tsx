import Button from "@/components/atoms/Button";
import { useRouter } from "next/router";
import * as S from "./Avatar.style";

export default function Avatar() {
  const router = useRouter();

  return (
    <S.AvatarWrapper>
      <Button onClick={() => router.push("/login")}>로그인</Button>
    </S.AvatarWrapper>
  );
}
