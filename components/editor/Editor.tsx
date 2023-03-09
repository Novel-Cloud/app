import { useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import * as S from "./Editor.style";

export default function EditorView() {
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
          if (!event.ctrlKey)
            switch (event.key) {
              case "1":
                document.execCommand("insertText", false, "1번 클릭");
                break;
              case "2":
                document.execCommand("insertText", false, "2번 클릭");
                break;
              case "3":
                document.execCommand("insertText", false, "3번 클릭");
                break;
              case "4":
                document.execCommand("insertText", false, "4번 클릭");
                break;
              case "5":
                document.execCommand("insertText", false, "5번 클릭");
                break;
              case "6":
                document.execCommand("insertText", false, "6번 클릭");
                break;
              case "7":
                document.execCommand("insertText", false, "7번 클릭");
                break;
              case "8":
                document.execCommand("insertText", false, "8번 클릭");
                break;
              case "9":
                document.execCommand("insertText", false, "9번 클릭");
                break;
              default:
                break;
            }
        }}
      />
    </S.EditorWrapper>
  );
}
