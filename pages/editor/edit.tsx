import CreateShortCut from "@/components/editor/edit/CreateShortCut";
import EditorEditApp from "@/components/editor/edit/EditorEditApp";
import EditorEditLayout from "@/layout/EditorEditLayout";

export default function Edit() {
  return (
    <EditorEditLayout app={<EditorEditApp />} input={<CreateShortCut />} />
  );
}
