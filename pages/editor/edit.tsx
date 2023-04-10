import CreateShortCutView from "@/components/editor/edit/CreateShortCutView";
import EditorEditApp from "@/components/editor/edit/EditorEditApp";
import EditorEditLayout from "@/layout/EditorEditLayout";

export default function Edit() {
  return (
    <EditorEditLayout app={<EditorEditApp />} input={<CreateShortCutView />} />
  );
}
