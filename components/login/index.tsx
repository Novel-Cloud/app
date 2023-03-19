import config from "@/config";
import Image from "next/image";
import { useRouter } from "next/router";
import GoogleIcon from "../icons/editor/GoogleIcon";
import * as S from "./index.style";
import { LoginButton } from "./LoginButton.style";

export default function Login() {
  const router = useRouter();

  return (
    <S.LoginWrapper>
      <Image
        src="/assets/LoginGirl.png"
        alt="yokoso"
        width={300}
        height={360}
      />
      <div>
        <S.LoginTitle>Login</S.LoginTitle>
        <LoginButton
          onClick={() =>
            router.push(`${config.baseURL}/oauth2/authorization/google`)
          }
        >
          <GoogleIcon /> Link Start!
        </LoginButton>
      </div>
    </S.LoginWrapper>
  );
}
