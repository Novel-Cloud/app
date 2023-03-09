import Header from "@/components/common/header";
import { ReactNode } from "react";
import * as S from "./ArtworkDetailLayout.style";

interface ArtworkDetailLayoutProps {
  app: ReactNode;
}

export default function ArtworkDetailLayout({ app }: ArtworkDetailLayoutProps) {
  return (
    <>
      <Header />
      <S.ArtworkDetailLayoutWrapper>{app}</S.ArtworkDetailLayoutWrapper>
    </>
  );
}
