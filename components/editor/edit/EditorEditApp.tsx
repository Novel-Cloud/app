import { useEffect, useState } from "react";
import { useShortCutList } from "@/model/editor";
import { ShortCut } from "@/types/editor.interface";
import DragDropView from "./DragDropView";

export default function EditorEditApp() {
  const { data: shortCutList } = useShortCutList();
  const [myShortCutList, setMyShortCutList] = useState<ShortCut[]>([]);

  useEffect(() => {
    setMyShortCutList(myShortCutList);
  }, [setMyShortCutList, myShortCutList]);

  return (
    <DragDropView
      shortCutList={shortCutList}
      setShortCutList={setMyShortCutList}
    />
  );
}
