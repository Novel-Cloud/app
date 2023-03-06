import { useRef } from "react";
import ContentEditable, { ContentEditableEvent } from "react-contenteditable";
import styles from "@/styles/editor.module.css";

export default function EditorView() {
  const content = useRef<string>("");

  const handleChange = (event: ContentEditableEvent) => {
    content.current = event.target.value;
    console.log(event.target.value);
  };

  const handleBlur = () => {
    console.log(content.current);
  };

  return (
    <ContentEditable
      html={content.current}
      onBlur={handleBlur}
      onChange={handleChange}
      tagName="article"
      id={styles.editor}
      title="editor"
    />
  );
}
