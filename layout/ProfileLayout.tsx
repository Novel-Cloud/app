import { ReactNode } from "react";
import * as S from "./ProfileLayout.style";

interface ProfileLayoutProps {
  app: ReactNode;
  background: ReactNode;
}

export default function ProfileLayout({ app, background }: ProfileLayoutProps) {
  return (
    <S.ProfileLayoutWrapper>
      {background}
      {app}
    </S.ProfileLayoutWrapper>
  );
}
