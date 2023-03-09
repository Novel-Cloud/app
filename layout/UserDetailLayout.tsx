import { ReactNode } from "react";
import * as S from "./ArtworkDetailLayout.style";

interface UserDetailLayoutProps {
  app: ReactNode;
  background: ReactNode;
}

export default function UserDetailLayout({
  app,
  background,
}: UserDetailLayoutProps) {
  return (
    <S.ArtworkDetailLayoutWrapper>
      {background}
      {app}
    </S.ArtworkDetailLayoutWrapper>
  );
}
