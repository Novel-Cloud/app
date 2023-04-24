import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import useDebounce from "@/hooks/useDebounce";
import React, { KeyboardEventHandler, useEffect, useState } from "react";
import httpClient from "@/apis";
import { toast } from "react-toastify";
import { xssFilter } from "@/utils/editor";
import { useContent } from "@/model/artwork";
import * as S from "./Editor.style";
import PDFService from "../pdf/PdfService";

interface EditorViewProps {
  getCommand: (number: number) => void;
}

export default function EditorView({ getCommand }: EditorViewProps) {
  const { data: savedContent } = useContent();
  const [content, setContent] = useState("");
  const debouncedContent = useDebounce({ value: content, delay: 4000 });

  const handleChange = (event: ContentEditableEvent) => {
    setContent(event.target.value);
  };

  const handleKeyDown: KeyboardEventHandler<HTMLDivElement> = (event) => {
    if (event.ctrlKey) getCommand(Number(event.key) || -1);
  };

  useEffect(() => {
    if (debouncedContent !== "")
      httpClient.artworkSave
        .post({ content: xssFilter(debouncedContent) })
        .then((r) => toast.success(r.data))
        .catch((e) => toast.error(e.response.data.message));
  }, [debouncedContent]);

  useEffect(() => {
    setContent(savedContent);
  }, [savedContent]);

  return (
    <PDFService>
      <S.EditorWrapper>
        <ContentEditable
          id="editor"
          tagName="span"
          spellCheck="false"
          html={content}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
        />
      </S.EditorWrapper>
    </PDFService>
  );
}
