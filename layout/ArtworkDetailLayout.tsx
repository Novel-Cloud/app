import Header from "@/components/common/header";
import { ReactNode } from "react";
import * as S from "./ArtworkDetailLayout.style";

interface ArtworkDetailLayoutProps {
  app: ReactNode;
  detail: ReactNode;
  comment: ReactNode;
}

export default function ArtworkDetailLayout({
  app,
  detail,
  comment,
}: ArtworkDetailLayoutProps) {
  return (
    <>
      <Header />
      <S.ArtworkDetailLayoutWrapper>
        {app}
        {detail}
        {comment}
      </S.ArtworkDetailLayoutWrapper>
    </>
  );
}
