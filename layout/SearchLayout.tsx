import Header from "@/components/common/Header";
import { ReactNode } from "react";
import * as S from "./SearchLayout.style";

interface SearchLayoutProps {
  app: ReactNode;
  result: ReactNode;
}

export default function SearchLayout({ app, result }: SearchLayoutProps) {
  return (
    <>
      <Header />
      <S.SearchLayoutWrapper>
        {result}
        {app}
      </S.SearchLayoutWrapper>
    </>
  );
}
