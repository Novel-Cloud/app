import EditorView from "@/components/editor/Editor";
import ToolbarView from "@/components/editor/Toolbar";
import EditorLayout from "@/layout/EditorLayout";

export default function EditorPage() {
  return <EditorLayout editor={<EditorView />} toolbar={<ToolbarView />} />;
}
