import { useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import styles from "@/styles/editor.module.css";

export default function EditorView() {
  const content = useRef<string>("");

  const handleChange = (event: ContentEditableEvent) => {
    content.current = event.target.value;
  };

  return (
    <ContentEditable
      tagName="span"
      html={content.current}
      onChange={handleChange}
      id={styles.editor}
      spellCheck="false"
      placeholder="당신의 글을 쓰세요"
    />
  );
}
