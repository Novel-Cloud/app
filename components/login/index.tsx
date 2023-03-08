import Image from "next/image";
import * as S from "./index.style";
import { LoginButton } from "./LoginButton.style";

export default function Login() {
  return (
    <S.LoginWrapper>
      <Image
        src="/assets/LoginGirl.png"
        alt="yokoso"
        width={400}
        height={480}
      />
      <S.LoginTitle>Login</S.LoginTitle>

      <LoginButton>Link Start</LoginButton>
    </S.LoginWrapper>
  );
}
