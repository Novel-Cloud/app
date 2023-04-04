import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import useDebounce from "@/hooks/useDebounce";
import React, { KeyboardEventHandler, useEffect, useRef } from "react";
import httpClient from "@/apis";
import { useContent } from "@/model/artwork";
import * as S from "./Editor.style";
import PDFService from "../pdf/PdfService";

interface EditorViewProps {
  getCommand: (number: number) => void;
}

export default function EditorView({ getCommand }: EditorViewProps) {
  const { data: savedContent } = useContent();
  const content = useRef<string>("");
  const debouncedContent = useDebounce({ value: content, delay: 3000 });

  const handleChange = (event: ContentEditableEvent) => {
    content.current = event.target.value;
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.ctrlKey) getCommand(Number(event.key) || -1);
  };

  useEffect(() => {
    httpClient.artworkSave
      .post({ content: debouncedContent })
      .then((r) => r.data);
  }, [debouncedContent]);

  useEffect(() => {
    content.current = savedContent;
  }, [savedContent]);

  return (
    <PDFService>
      <S.EditorWrapper>
        <ContentEditable
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
