import { ReactNode } from "react";
import * as S from "./LoginLayout.style";

interface LoginLayoutProps {
  app: ReactNode;
}

function Frame({ app }: LoginLayoutProps) {
  return <S.LoginLayout id="login-view">{app}</S.LoginLayout>;
}

export default function LoginLayout(props: LoginLayoutProps) {
  return <Frame {...props} />;
}
