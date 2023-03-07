import Image from "next/image";
import { useRouter } from "next/router";
import HeaderLogo from "@/public/assets/HeaderLogo.png";
import * as S from "./Logo.style";

export default function Logo() {
  const router = useRouter();

  return (
    <S.LogoWrapper onClick={() => router.push("/")}>
      <Image src={HeaderLogo} alt="header logo" width={200} />
    </S.LogoWrapper>
  );
}
