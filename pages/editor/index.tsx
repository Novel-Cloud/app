import EditorView from "@/components/editor/Editor";
import ToolbarView from "@/components/editor/Toolbar";
import { editorHotkeyState } from "@/context";
import EditorLayout from "@/layout/EditorLayout";
import { HotkeysProvider } from "react-hotkeys-hook";
import { useRecoilValue } from "recoil";

export default function EditorPage() {
  const editorHotkey = useRecoilValue(editorHotkeyState);
  return (
    <HotkeysProvider initiallyActiveScopes={editorHotkey}>
      <EditorLayout editor={<EditorView />} toolbar={<ToolbarView />} />;
    </HotkeysProvider>
  );
}
