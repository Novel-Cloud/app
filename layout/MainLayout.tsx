import { ReactNode } from "react";
import * as S from "./MainLayout.style";

interface MainLayoutProps {
  tags: ReactNode;
  app: ReactNode;
}

function Frame({ tags, app }: MainLayoutProps) {
  return (
    <S.MainLayout id="main-view">
      {tags}
      {app}
    </S.MainLayout>
  );
}

export default function MainLayout(props: MainLayoutProps) {
  return <Frame {...props} />;
}
