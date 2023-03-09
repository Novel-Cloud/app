import Image from "next/image";
import GoogleIcon from "../icons/editor/GoogleIcon";
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
      <div>
        <S.LoginTitle>Login</S.LoginTitle>
        <LoginButton>
          <GoogleIcon /> Link Start
        </LoginButton>
      </div>
    </S.LoginWrapper>
  );
}
