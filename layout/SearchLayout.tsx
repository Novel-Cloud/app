import Header from "@/components/common/header";
import { ReactNode } from "react";
import * as S from "./SearchLayout.style";

interface SearchLayoutProps {
  app: ReactNode;
}

export default function SearchLayout({ app }: SearchLayoutProps) {
  return (
    <>
      <Header />
      <S.SearchLayoutWrapper>{app}</S.SearchLayoutWrapper>
    </>
  );
}
