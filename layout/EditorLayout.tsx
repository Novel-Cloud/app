import { ReactNode } from "react";

interface EditorLayoutProps {
  toolbar: ReactNode;
  editor: ReactNode;
}

function Frame({ toolbar, editor }: EditorLayoutProps) {
  return (
    <section id="editor-view">
      <div>{toolbar}</div>
      <div>{editor}</div>
    </section>
  );
}

export default function EditorLayout(props: EditorLayoutProps) {
  return <Frame {...props} />;
}
