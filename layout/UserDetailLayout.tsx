import { ReactNode } from "react";
import * as S from "./ArtworkDetailLayout.style";

interface UserDetailLayoutProps {
  app: ReactNode;
}

export default function UserDetailLayout({ app }: UserDetailLayoutProps) {
  return <S.ArtworkDetailLayoutWrapper>{app}</S.ArtworkDetailLayoutWrapper>;
}
