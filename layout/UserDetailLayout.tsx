import { ReactNode } from "react";
import * as S from "./UserDetailLayout.style";

interface UserDetailLayoutProps {
  app: ReactNode;
  background: ReactNode;
}

export default function UserDetailLayout({
  app,
  background,
}: UserDetailLayoutProps) {
  return (
    <S.UserDetailLayoutWrapper>
      {background}
      {app}
    </S.UserDetailLayoutWrapper>
  );
}
