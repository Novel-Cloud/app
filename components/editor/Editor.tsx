import { useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";

import * as S from "./Editor.style";

export default function EditorView({
  getCommand,
}: {
  getCommand: (number: number) => void;
}) {
  const content = useRef<string>("");

  const handleChange = (event: ContentEditableEvent) => {
    content.current = event.target.value;
  };

  return (
    <S.EditorWrapper>
      <ContentEditable
        id="editor"
        tagName="span"
        spellCheck="false"
        html={content.current}
        onChange={handleChange}
        onKeyDown={(event) => {
          if (event.ctrlKey) getCommand(Number(event.key) || -1);
        }}
      />
    </S.EditorWrapper>
  );
}
