import { useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import * as S from "./Editor.style";

export default function EditorView() {
  const content = useRef<string>("");

  const handleChange = (event: ContentEditableEvent) => {
    content.current = event.target.value;
    console.log(event.target.value);
  };

  return (
    <S.EditorWrapper>
      <ContentEditable
        tagName="span"
        html={content.current}
        onChange={handleChange}
        spellCheck="false"
        id="editor"
      />
    </S.EditorWrapper>
  );
}
