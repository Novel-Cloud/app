import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import React, { KeyboardEventHandler, useRef } from "react";
import * as S from "./Editor.style";
import PDFService from "../pdf/PdfService";

interface EditorViewProps {
  getCommand: (number: number) => void;
}

export default function EditorView({ getCommand }: EditorViewProps) {
  const content = useRef<string>("");
  const imageExportComponent = useRef(null);

  const handleChange = (event: ContentEditableEvent) => {
    content.current = event.target.value;
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.ctrlKey) getCommand(Number(event.key) || -1);
  };

  return (
    <PDFService>
      <S.EditorWrapper>
        <ContentEditable
          ref={imageExportComponent}
          id="editor"
          tagName="span"
          spellCheck="false"
          html={content.current}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </S.EditorWrapper>
    </PDFService>
  );
}
