import Header from "@/components/common/Header";
import { ReactNode } from "react";
import * as S from "./SearchLayout.style";

interface SearchLayoutProps {
  app: ReactNode;
  result: ReactNode;
  filter: ReactNode;
}

export default function SearchLayout({
  app,
  result,
  filter,
}: SearchLayoutProps) {
  return (
    <>
      <Header />
      <S.SearchLayoutWrapper>
        {filter}
        {result}
        {app}
      </S.SearchLayoutWrapper>
    </>
  );
}
