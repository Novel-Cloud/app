import { ReactNode } from "react";
import * as S from "./EditorLayout.style";

interface EditorLayoutProps {
  toolbar: ReactNode;
  editor: ReactNode;
}

function Frame({ toolbar, editor }: EditorLayoutProps) {
  return (
    <S.EditorLayout id="editor-view">
      {toolbar}
      {editor}
    </S.EditorLayout>
  );
}

export default function EditorLayout(props: EditorLayoutProps) {
  return <Frame {...props} />;
}
