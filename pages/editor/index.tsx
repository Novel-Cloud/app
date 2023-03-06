import EditorView from "@/components/editor/index";
import Toolbar from "@/components/editor/Toolbar";
import EditorLayout from "@/layout/EditorLayout";

export default function EditorPage() {
  return <EditorLayout editor={<EditorView />} toolbar={<Toolbar />} />;
}
