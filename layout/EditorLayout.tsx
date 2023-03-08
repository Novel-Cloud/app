import MainFrame from "@/components/common/frame";
import { ReactNode } from "react";
import * as S from "./EditorLayout.style";

interface EditorLayoutProps {
  toolbar: ReactNode;
  editor: ReactNode;
}

function Frame({ toolbar, editor }: EditorLayoutProps) {
  return (
    <MainFrame>
      <S.EditorLayout id="editor-view">
        {toolbar}
        {editor}
      </S.EditorLayout>
    </MainFrame>
  );
}

export default function EditorLayout(props: EditorLayoutProps) {
  return <Frame {...props} />;
}
